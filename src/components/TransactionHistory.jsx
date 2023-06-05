import Link from "next/link"
import { WalletIcon } from "@/components/Icons"
import { TRANSACTIONS } from "@/constants"

export function ListMovement({ transaction }) {
  return (
    <Link
      href={`/remittances/${transaction.transactionId}`}
      className="flex rounded-lg justify-start items-center  gap-8 hover:bg-slate-300 py-2 px-4"
    >
      <WalletIcon />
      <div className="flex items-start flex-col">
        <h3 className="first-letter:uppercase  font-bold text-lg">
          {transaction?.name}
        </h3>
        <h4 className="first-letter:uppercase  font-light">
          {transaction?.date}
        </h4>
      </div>
      <div className="flex content-center flex-col">
        <h4 className="first-letter:uppercase  font-normal">
          {transaction?.type}
        </h4>
      </div>
      <div className="flex content-center flex-col">
        <h4 className="first-letter:uppercase  font-normal">
          ${transaction?.amount}
        </h4>
      </div>
    </Link>
  )
}

export function TransactionHistory() {
  return (
    <div className="flex flex-col gap-1 w-full">
      {TRANSACTIONS.map((transaction) => (
        <ListMovement
          key={transaction.transactionId}
          transaction={transaction}
        />
      ))}
    </div>
  )
}
