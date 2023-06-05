export const CARD_TYPES = {
  gastos: {
    title: "Gastos",
    type: "gastos",
    img: "/cards/gastos.png",
  },
  efectivo: {
    type: "efectivo",
    title: "Efectivo",
    img: "/cards/efectivo.png",
  },
  remesas: {
    img: "/cards/remesas.png",
    title: "Remesas",
    type: "remesas",
  },
}

export const TRANSACTION_STEPS = [
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

export const SENT_REMITTANCE = {
  name: "Envío de remesa",
  date: "6 de junio de 2023",
  transactionId: "0x1234567890",
  amount: 6_000,
  fee: 0.1,
  gasFee: 0.05,
  type: "Remesa",
  currency: "USDC",
  currentStep: 1,
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
}

const RECEIVED_REMITTANCE = {
  name: "Remesa recibida",
  date: "6 de junio de 2023",
  transactionId: "0x1234567890",
  amount: 100,
  fee: 0.1,
  gasFee: 0.05,
  type: "Remesa",
  currency: "USDC",
  currentStep: 1,
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
}

export const TRANSACTIONS = [SENT_REMITTANCE, RECEIVED_REMITTANCE]
