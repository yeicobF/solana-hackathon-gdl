import { Greeting } from "@/components/Greeting"
import { Sidebar } from "@/components/Sidebar"
import { Toaster } from "react-hot-toast"

export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex w-full flex-row h-full flex-wrap">
        <main className="flex px-8 py-12 justify-start flex-col gap-12 w-full">
          <Greeting />
          {children}
          <Toaster position="bottom-center" />
        </main>
      </div>
    </div>
  )
}
