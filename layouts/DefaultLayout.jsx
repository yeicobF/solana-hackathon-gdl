import { SideShortcuts } from "@/components/SideShortcuts"
import { Sidebar } from "@/components/Sidebar"
import { Toaster } from "react-hot-toast"

export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex flex-row h-full flex-wrap">
        <main className="flex px-8 py-12 justify-start flex-col gap-12">
          {children}
          <Toaster position="bottom-center" />
        </main>
      </div>
    </div>
  )
}
