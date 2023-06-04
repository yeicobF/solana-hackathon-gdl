import { SectionContainer } from "@/components/SectionContainer"
import { Title } from "@/components/Title"
import { useRouter } from "next/router"

export function Remittance() {
  const router = useRouter()

  const { id } = router.query

  return (
    <SectionContainer>
      <Title>{id}</Title>
    </SectionContainer>
  )
}
