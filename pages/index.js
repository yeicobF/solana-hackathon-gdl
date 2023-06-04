import { Card } from "@/components/Card"
import { Greeting } from "@/components/Greeting"
import { InfoIcon } from "@/components/Icons"
import { SectionContainer } from "@/components/SectionContainer"
import { SideShortcuts } from "@/components/SideShortcuts"
import { Title } from "@/components/Title"
import { CARD_TYPES } from "@/constants"

function CardContainer({ card }) {
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

export default function HomePage() {
  return (
    <>
      <Greeting />
      <SectionContainer className="flex flex-wrap gap-12">
        {Object.values(CARD_TYPES).map((card) => (
          <CardContainer key={card?.type} card={card} />
        ))}
      </SectionContainer>
      <SectionContainer>
        <Title>Historial</Title>
      </SectionContainer>
      <SideShortcuts />
    </>
  )
}