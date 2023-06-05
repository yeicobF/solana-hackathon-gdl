import { CARD_TYPES } from "@/constants"
import Image from "next/image"

export function Card({ type }) {
  const cardType = Object.values(CARD_TYPES).find((card) => card?.type === type)
  return (
    <Image
      className="aspect-video rounded-sm overflow-hidden"
      src={cardType?.img}
      width={270}
      height={190}
      alt={`Wallet de ${cardType?.title}`}
    />
  )
}
