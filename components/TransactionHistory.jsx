import Link from "next/link"
import { WalletIcon } from "./icons/WalletIcon"


export  function RecordOperationContainer({ record }) {
    return (
      <Link href={`/remittances/${record.transactionId}`} className="flex rounded-lg justify-start items-center  gap-8 hover:bg-slate-300 py-2 px-4">
  g
        <WalletIcon />
        <div className="flex items-start flex-col">
          <h3 className="first-letter:uppercase  font-bold text-lg">
            {record?.name}
          </h3>
          <h4 className="first-letter:uppercase  font-light">
            {record?.date}
          </h4>
        </div>
        <div className="flex content-center flex-col">
          <h4 className="first-letter:uppercase  font-normal">
            {record?.type}
          </h4>
        </div>
        <div className="flex content-center flex-col">
        <h4 className="first-letter:uppercase  font-normal">
            ${record?.amount}
          </h4>
        </div>
      </Link>
    )
  }

  export function TransactionHistory({transactions}){
    return transactions.map(transaction => (
        <RecordOperationContainer record={transaction}/>
      ))
  }