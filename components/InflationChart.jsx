import { getCountryInflation } from "@/server/inflation"
import { Card, Title, LineChart } from "@tremor/react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const chartdata = [
  {
    month: "Abril",
    Inflación: 104.3,
  },
  {
    month: "Mayo",
    Inflación: 108.8,
  },
  //...
]

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`

const DEFAULT_COUNTRY = "Argentina"

export const InflationChart = ({ country = DEFAULT_COUNTRY }) => {
  const [inflation, setInflation] = useState()

  useEffect(() => {
    getCountryInflation(country)
      .then((data) => {
        console.log({ data })
      })
      .catch(() => {
        toast.error("Ha ocurrido un error")
      })
  }, [country])

  return (
    <Card>
      <Title>Inflación en {country}</Title>

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
}
