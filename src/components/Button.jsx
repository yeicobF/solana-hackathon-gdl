export function Button({ children, ...props }) {
  return (
    <button className="cursor-pointer" {...props}>
      {children}
    </button>
  )
}
