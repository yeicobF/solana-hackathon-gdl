import { WalletIcon, InfoIcon } from "@/components/Icons"
import { SectionContainer } from "@/components/SectionContainer"
import { SideShortcuts } from "@/components/SideShortcuts"
import { Title } from "@/components/Title"
import Link from "next/link"
import { Cards } from "@/components/Cards"

const REMMITANCE = {
  date: "2023-06-03 09:42AM",
  transactionId: "0x1234567890",
  name: "Amazon Pay",
  type: "Gastos",
  amount: 6599.0,
  fee: 0.1,
  gasFee: 0.05,
  currency: "USD",
  status: "pending",
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
const TRANSACTIONS = [REMMITANCE]

function RecordOperationContainer({ record }) {
  return (
    <Link
      href={`/remittances/${record.transactionId}`}
      className="flex rounded-lg justify-start items-center  gap-8 hover:bg-slate-300 py-2 px-4"
    >
      <WalletIcon />
      <div className="flex items-start flex-col">
        <h3 className="first-letter:uppercase  font-bold text-lg">
          {record?.name}
        </h3>
        <h4 className="first-letter:uppercase  font-light">{record?.date}</h4>
      </div>
      <div className="flex content-center flex-col">
        <h4 className="first-letter:uppercase  font-normal">{record?.type}</h4>
      </div>
      <div className="flex content-center flex-col">
        <h4 className="first-letter:uppercase  font-normal">
          ${record?.amount}
        </h4>
      </div>
    </Link>
  )
}

export default function HomePage({ wallets }) {
  return (
    <>
      <Cards />
      <SectionContainer className="flex flex-col gap-12">
        <Title>Historial</Title>
        {TRANSACTIONS.map((transaction) => (
          <RecordOperationContainer
            key={transaction.transactionId}
            record={transaction}
          />
        ))}
      </SectionContainer>
      <SideShortcuts />
    </>
  )
}

// export const getServerSideProps = async () => {
//   const transactions = await
//
//   return { props: { wallets: {} } }
// }
