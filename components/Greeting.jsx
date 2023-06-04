import Image from "next/image"
import { Title } from "./Title"

const PROFILE_PICTURE_PLACEHOLDER = "/avatars/1.png"

const USER = {
  name: "Juan Carlos",
  img: PROFILE_PICTURE_PLACEHOLDER,
}

export function Greeting() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={USER.img}
        width={60}
        height={60}
        className="aspect-square rounded-full"
        alt="Profile picture"
      />
      <h1 className="font-bold text-xl">Buenos días, {USER.name}</h1>
    </div>
  )
}
