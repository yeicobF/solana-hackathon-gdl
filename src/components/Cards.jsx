import { CARD_TYPES } from "@/constants"
import { CardContainer } from "./CardContainer"
import { SectionContainer } from "./SectionContainer"

export function Cards() {
  return (
    <SectionContainer className="flex flex-wrap gap-12">
      {Object.values(CARD_TYPES).map((card) => (
        <CardContainer key={card?.type} card={card} />
      ))}
    </SectionContainer>
  )
}
