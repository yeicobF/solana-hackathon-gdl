import { useRouter } from "next/router"
import { SidebarItem } from "./SidebarItem"
import { HomeIcon, RemittanceIcon, StatsIcon, WalletIcon } from "./Icons"
import Image from "next/image"

const SIDEBAR_ITEMS = [
  {
    text: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    text: "Wallets",
    icon: <WalletIcon />,
    link: "/wallets",
  },
  {
    text: "Remesas",
    icon: <RemittanceIcon />,
    link: "/remittances",
  },
  {
    text: "Estadísticas",
    icon: <StatsIcon />,
    link: "/stats",
  },
]

export function Sidebar() {
  const router = useRouter()

  const isRouteActive = (link) => router.pathname === link

  return (
    <aside
      id="default-sidebar"
      class="top-0 left-0 gap-12 py-8 z-40 w-56 h-screen transition-transform -translate-x-full px-3 flex flex-col sm:translate-x-0 border-r-2 border-slate-200"
      aria-label="Sidebar"
    >
      <Image
        src="/logos/nameless.png"
        width={48}
        height={48}
        alt="Decaf logo"
      />
      <ul class="w-full h-full overflow-y-auto bg-white text-[#1C1B1F] space-y-2 font-medium">
        {SIDEBAR_ITEMS.map(({ text, icon, link }, index) => (
          <SidebarItem
            text={text}
            icon={icon}
            isActive={isRouteActive(link)}
            link={link}
            key={link}
          />
        ))}
      </ul>
    </aside>
  )
}
