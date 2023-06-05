import { SectionContainer } from "@/components/SectionContainer"
import { SideShortcuts } from "@/components/SideShortcuts"
import { Title } from "@/components/Title"
import { Cards } from "@/components/Cards"
import { TransactionHistory } from "@/components/TransactionHistory"
import { Button } from "@/components/Button"

export default function HomePage() {
  return (
    <>
      <Cards />
      <SectionContainer className="flex flex-col gap-12">
        <Title>Historial</Title>
        <Button></Button>
        <TransactionHistory />
      </SectionContainer>
      <SideShortcuts />
    </>
  )
}

// export const getServerSideProps = async () => {
//   const transactions = await
//
//   return { props: { wallets: {} } }
// }
