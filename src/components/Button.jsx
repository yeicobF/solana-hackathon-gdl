export function Button({ children, ...props }) {
  return (
    <button className="cursor-pointer px-3 py-2 bg-primary" {...props}>
      {children}
    </button>
  )
}
