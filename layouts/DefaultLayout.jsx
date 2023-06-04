import { Sidebar } from "@/components/Sidebar"
import { Toaster } from "react-hot-toast"

export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen ">
      <Sidebar />
      <main className="flex px-8 py-12 w-full">
        {children}
        <Toaster position="bottom-center" />
      </main>
    </div>
  )
}
