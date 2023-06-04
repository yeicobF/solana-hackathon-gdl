export function SectionContainer({ children, ...props }) {
  return (
    <section className="border-2 border-[#CBCBCB] rounded px-5 py-4" {...props}>
      {children}
    </section>
  )
}
