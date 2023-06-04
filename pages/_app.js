import { DefaultLayout } from "@/layouts/DefaultLayout"
import "@/styles/globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import Head from "next/head"

const activeChainId = ChainId.SolanaDevnet

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Decaf Pay</title>
      </Head>
      <ClerkProvider {...pageProps}>
        <ThirdwebProvider desireChainId={activeChainId}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThirdwebProvider>
      </ClerkProvider>
    </>
  )
}
