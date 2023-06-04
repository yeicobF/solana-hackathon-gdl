import { Card } from "@/components/Card"
import { Greeting } from "@/components/Greeting"
import { InfoIcon } from "@/components/Icons"
import { SectionContainer } from "@/components/SectionContainer"
import { CARD_TYPES } from "@/constants"

function CardContainer({ card }) {
  return (
    <article className="flex flex-col gap-2 max-w-xs">
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

export default function HomePage() {
  return (
    <>
      <Greeting />
      <SectionContainer className="grid grid-cols-3 gap-12">
        {Object.values(CARD_TYPES).map((card) => (
          <CardContainer key={card?.type} card={card} />
        ))}
      </SectionContainer>
    </>
  )
}
