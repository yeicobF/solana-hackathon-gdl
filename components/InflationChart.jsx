import { Card, Title, LineChart } from "@tremor/react"

const chartdata = [
  {
    month: "Enero",
    Inflación: 2.04,
  },
  {
    month: "Febrero",
    Inflación: 1.96,
  },
  {
    month: "Marzo",
    Inflación: 1.96,
  },
  {
    month: "Abril",
    Inflación: 1.93,
  },
  {
    month: "Mayo",
    Inflación: 1.88,
  },
  //...
]

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`

export const InflationChart = () => (
  <Card>
    <Title>Inflación general</Title>

    <LineChart
      className="mt-6 h-96 lg:h-72 lg:w-full w-[30rem]"
      data={chartdata}
      index="month"
      categories={["Inflación"]}
      colors={["purple"]}
      yAxisWidth={40}
    />
  </Card>
)
