import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { LoadingSpinner } from "./LoadingSpinner"
import { useEffect, useState } from "react"

export function Greeting() {
  const { isLoaded, user } = useUser()

  const GREETING_INITIAL_TEXT = "Buenos días"
  const [greeting, setGreeting] = useState("Buenos días")

  useEffect(() => {
    if (!user.firstName) {
      setGreeting(GREETING_INITIAL_TEXT)
      return
    }

    setGreeting(`Buenos días, ${user.firstName}`)
  }, [user])

  if (!isLoaded) return <LoadingSpinner />

  return (
    <div className="flex gap-2 items-center">
      <Image
        src={user.imageUrl}
        width={60}
        height={60}
        className="aspect-square rounded-full"
        alt="Profile picture"
      />
      <h1 className="font-bold text-xl">{greeting}</h1>
    </div>
  )
}
