import { Card } from "./Card"
import { InfoIcon } from "@/components/Icons/InfoIcon"

export function CardContainer({ card }) {
  return (
    <article className="flex flex-col gap-2 w-xs">
      <header className="flex justify-between items-center">
        <h3 className="first-letter:uppercase  font-bold text-lg">
          {card?.title}
        </h3>
        <InfoIcon />
      </header>
      <Card type={card?.type} />
    </article>
  )
}
