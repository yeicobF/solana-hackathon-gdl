export function SectionContainer({ children, ...props }) {
  return (
    <section className="border-1 border-[#CBCBCB]" rounded {...props}>
      {children}
    </section>
  )
}
