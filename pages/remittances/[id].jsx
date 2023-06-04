import { SectionContainer } from "@/components/SectionContainer"
import { Title } from "@/components/Title"
import { useRouter } from "next/router"

const TRANSACTION = {
  date: "6 de junio de 2023",
  transactionId: "0x1234567890",
  amount: 100,
  fee: 0.1,
  gasFee: 0.05,
  type: "Remesa",
  currency: "USDC",
  sender: {
    walletId: "0x1234567890",
    name: "John Doe",
    location: "San Diego, California",
  },
  recipient: {
    walletId: "0x1234567891",
    name: "Jane Doe",
    location: "Jalisco, Mexico",
  },
  currentStep: 1,
}

const STEPS = [
  {
    number: 0,
    text: "Proceso iniciado",
    icon: "📝",
  },
  {
    number: 1,
    text: "Validando datos",
    icon: "🔍",
  },
  {
    number: 2,
    text: "Enviado",
    icon: "🔍",
  },
  {
    number: 3,
    text: "Confirmado de recibido",
    icon: "✅",
  },
]

export default function Remittance() {
  const router = useRouter()

  const { id } = router.query

  const {
    date,
    transactionId,
    amount,
    fee,
    gasFee,
    type,
    currency,
    sender,
    recipient,
    currentStep,
  } = TRANSACTION

  const transactionInfo = [
    {
      label: "Fecha",
      value: date,
    },
    {
      label: "Monto enviado",
      value: amount,
    },
    {
      label: "Enviado por",
      value: sender.name,
    },
    {
      label: "Enviado desde",
      value: sender.location,
    },
    {
      label: "Comisión por envío de remesa",
      value: fee,
    },
    {
      label: "Tarifa de gas (gas fee)",
      value: gasFee,
    },
    {
      label: "Total pagado",
      value: amount + fee + gasFee,
    },
  ]

  const recipientInfo = [
    {
      label: "Beneficiario",
      value: recipient.name,
    },
    {
      label: "Destino",
      value: recipient.location,
    },
    {
      label: "ID",
      value: transactionId,
    },
    {
      label: "Tipo",
      value: type,
    },
  ]

  const info = [transactionInfo, recipientInfo]

  return (
    <SectionContainer className="flex flex-col gap-8">
      <Title>Remesa / Envío</Title>
      <section className="w-full rounded-md border-slate-200 border-2 p-[10rem] items-start justify-between flex gap-10 flex-col lg:flex-row">
        <ul className="flex flex-col gap-10">
          {STEPS.map(({ icon, text, number }) => (
            <li className="flex flex-row gap-4 items-center" key={number}>
              <span
                className={[
                  "text-lg",
                  TRANSACTION.currentStep <= number
                    ? "text-gray-400"
                    : "text-black",
                ].join(" ")}
              >{`${icon} ${text}`}</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-12">
          {info.map((infoSection, index) => (
            <ul key={index}>
              {infoSection.map(({ label, value }) => (
                <li key={value}>
                  <span className="font-bold">{`${label}: `}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </SectionContainer>
  )
}
