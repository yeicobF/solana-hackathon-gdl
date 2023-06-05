import { useRouter } from "next/router"
import { SidebarItem } from "./SidebarItem"
import { LoadingSpinner } from "./LoadingSpinner"
import {
  HomeIcon,
  RemittanceIcon,
  StatsIcon,
  WalletIcon,
} from "@/components/Icons"
import Image from "next/image"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs"
import { Button } from "./Button"

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

function AuthSection() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return <LoadingSpinner size={24} />
  if (isSignedIn) return <UserButton />

  return (
    <Button>
      <SignInButton />
    </Button>
  )
}

export function Sidebar() {
  const router = useRouter()

  const isRouteActive = (link) => router.pathname === link

  return (
    <aside
      id="default-sidebar"
      className="top-0 left-0 gap-12 py-8 z-40 w-56 h-screen transition-transform -translate-x-full px-3 flex flex-col sm:translate-x-0 border-r-2 border-slate-200"
      aria-label="Sidebar"
    >
      <Image
        src="/logos/decaf_Black_Brand.png"
        width={160}
        height={44}
        alt="Decaf logo"
      />
      <ul className="w-full h-full overflow-y-auto bg-white text-[#1C1B1F] space-y-2 font-medium">
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
      <section>
        <AuthSection />
      </section>
    </aside>
  )
}
