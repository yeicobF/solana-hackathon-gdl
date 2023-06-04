import Link from "next/link"
import { WalletIcon } from "./icons/WalletIcon"

export function RecordOperationContainer({ transaction }) {
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

export function TransactionHistory({ transactions }) {
  return transactions.map((transaction) => (
    <RecordOperationContainer
      key={transaction.transactionId}
      transaction={transaction}
    />
  ))
}
