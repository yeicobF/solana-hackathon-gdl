import { InflationChart } from "@/components/InflationChart"
import { SectionContainer } from "@/components/SectionContainer"
import { SideShortcuts } from "@/components/SideShortcuts"
import { Title } from "@/components/Title"

export default function StatsPage() {
  return (
    <SectionContainer>
      <Title>Estadísticas 📊</Title>
      <InflationChart />
    </SectionContainer>
  )
}
