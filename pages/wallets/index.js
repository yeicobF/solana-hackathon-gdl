import toast, { Toaster } from "react-hot-toast"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import {
  Connection,
  SystemProgram,
  Transaction,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  sendTransactionError,
} from "@solana/web3.js"

import { useStorageUpload, userStorage } from "@thirdweb-dev/react"
import { Title } from "@/components/Title"
import { Cards } from "@/components/Cards"

const SOLANA_NETWORK = "devnet" //cuando ya quiera hacer transacciones en la red principal, cambiar a mainnet

const Home = () => {
  const [publicKey, setPublicKey] = useState(null)
  const router = useRouter()
  const [balance, setBalance] = useState(0)
  const [receiver, setReceiver] = useState(null)
  const [amount, setAmount] = useState(null)
  const [explorerLink, setExplorerLink] = useState(null)

  //variables necsarias pasa subir archivos a ipfs
  const [uploadUrl, setUploadUrl] = useState(null)
  const [url, setUrl] = useState(null)
  const [statusText, setStatusText] = useState("")

  useEffect(() => {
    //cada vez que se recarga la pagina se ejecuta este codigo
    let key = window.localStorage.getItem("publicKey")
    setPublicKey(key)
    if (key) getBalance(key)
    if (explorerLink) setExplorerLink(null)
  }, [])

  const handleReceiverChange = (event) => {
    setReceiver(event.target.value)
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleSumbit = async () => {
    sendTransaction()
  }

  const signIn = async () => {
    const provider = window?.phantom?.solana
    const { solana } = window

    if (!provider?.isPhantom || !solana.isPhantom) {
      toast.error("Phantom wallet is not installed")
      setTimeout(() => {
        window.open("https://phantom.app/", "_blank")
      }, 2000)
      return
    }

    let phantom
    if (provider?.isPhantom) phantom = provider

    const { publicKey } = await phantom.connect() //conectar a phantom
    console.log("publicKey", publicKey.toString())

    setPublicKey(publicKey.toString()) //guardar la public key en el state
    window.localStorage.setItem("publicKey", publicKey.toString()) //guardar la public key en el local storage

    toast.success("Phantom wallet is connected")

    getBalance(publicKey)
  }

  const signOut = async () => {
    if (window) {
      const { solana } = window
      window.localStorage.removeItem("publicKey")
      setPublicKey(null)
      solana.disconnect()
      router.reload(window.location?.pathname)
      toast.success("Phantom wallet is disconnected")
    }
  }

  const getBalance = async (publicKey) => {
    try {
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed",
      )

      const balance = await connection.getBalance(new PublicKey(publicKey))

      const balancenew = balance / LAMPORTS_PER_SOL
      setBalance(balancenew)
    } catch (error) {}
  }

  const sendTransaction = async () => {
    try {
      getBalance(publicKey)

      if (balance < amount) {
        toast.error("Not enough balance")
        return
      }

      const provider = window?.phantom?.solana

      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed",
      )

      const fromPubkey = new PublicKey(publicKey)
      const toPubkey = new PublicKey(receiver)

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: amount * LAMPORTS_PER_SOL,
        }),
      )

      //Treaemos el ultimo blockhash
      const { blockhash } = await connection.getLatestBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = fromPubkey

      //firmamos la transaccion
      const signed = await provider.signTransaction(transaction)

      //enviamos la transaccion
      const txid = await connection.sendRawTransaction(signed.serialize())
      console.info("Transaction ID", txid)

      //esperamos a que la transaccion se confirme
      const confirmation = await connection.confirmTransaction(txid, {
        commitment: "confirmed",
      })

      const { slot } = confirmation.value

      console.info("Transaction confirmed at slot", slot)

      const solanaExplorerLink = `https://explorer.solana.com/tx/${txid}?cluster=${SOLANA_NETWORK}`
      setExplorerLink(solanaExplorerLink)

      toast.success("Transaction sent")

      getBalance(publicKey)
      setAmount(null)
      setReceiver(null)
      return
    } catch (error) {
      toast.error("Transaction error")
    }
  }

  //funcion para subir archivos a ipfs
  const { mutateAsync: upload } = useStorageUpload()

  const uploadToIpfs = async (file) => {
    setStatusText("Uploading...")
    const uploadUrl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true,
      },
    })

    return uploadUrl[0]
  }

  const urlToBlob = async (file) => {
    setStatusText("Converting url a blob...")
    await fetch(url)
      .then((res) => res.blob())
      .then((myBlob) => {
        myBlob.name = "blob.png"
        file = new File([myBlob], "image.png", { type: myBlob.type })
      })

    const uploadUrl = await uploadToIpfs(file)
    setStatusText(`La url de tu archivo en ipfs es ${uploadUrl}`)
    setUploadUrl(uploadUrl)
  }

  return (
    <>
      <Title>Wallets 💳</Title>
      <Cards />
      {publicKey ? (
        <div className="flex flex-col py-24 place-items-center justify-center">
          <br />

          <h1 className="text-2x1 font-bold text-white">
            Tu numero de wallet es {publicKey}
          </h1>

          <br />

          <h1 className="text-2x1 font-bold text-white">
            Tu balance es {balance} SOL
          </h1>

          <h1 className="text-2x1 text-white">Enviar una transaccion a:</h1>
          <input
            className="h-8 w-72 mt-4 border-2 border-black"
            type="text"
            onChange={handleReceiverChange}
          />

          <h1 className="text-2x1 text-white">Cantidad de sol a enviar:</h1>
          <input
            className="h-8 w-72 mt-4 border-2 border-black"
            type="text"
            onChange={handleAmountChange}
          />

          <br />

          <button
            type="submit"
            className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
            onClick={() => {
              handleSumbit()
            }}
          >
            Enviar
          </button>
          <br />
          <a href={explorerLink}>
            <h1 className="text-md font-bold text-sky-500">{explorerLink}</h1>
          </a>
          <br />

          <input
            className="h-8 w-72 mt-4 border-2 border-black"
            type="text"
            onChange={handleUrlChange}
          />

          <br />

          <button
            className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
            onClick={() => {
              urlToBlob()
            }}
          >
            Subir Archivo a IPFS
          </button>

          <br />

          <p className="text-2x1 font-bold text-white">{statusText}</p>

          <button
            type="submit"
            className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
            onClick={() => {
              signOut()
            }}
          >
            Desconecta tu wallet
          </button>
        </div>
      ) : (
        <div className="flex flex-col place-items-center justify-center">
          <button
            type="submit"
            className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
            onClick={() => {
              signIn()
            }}
          >
            Conecta tu wallet
          </button>
        </div>
      )}
    </>
  )
}

export default Home
