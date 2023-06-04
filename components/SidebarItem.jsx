import Link from "next/link"

export function SidebarItem({ text, icon, link, isActive }) {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
      >
        <div
          className={[
            "flex-shrink-0 w-6 h-6  transition duration-75 group-hover:text-gray-900 flex justify-center items-center",
            isActive ? "text-[#6218C7]" : "text-gray-500 dark:text-gray-400",
          ].join(" ")}
        >
          {icon}
        </div>
        <span class="ml-3">{text}</span>
      </Link>
    </li>
  )
}
