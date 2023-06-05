import { InflationChart } from "./InflationChart"
import { Title } from "./Title"

export function SideShortcuts() {
  return (
    <aside className="min-w-[25rem] lg:w-[30rem] w-full flex flex-col gap-10 h-fit lg:h-full">
      <Title>Widgets</Title>
      <section className="flex flex-wrap w-full h-fit">
        <InflationChart />
      </section>
    </aside>
  )
}
