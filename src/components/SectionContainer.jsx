export function SectionContainer({ children, ...props }) {
  return (
    <section className="flex flex-col gap-12" {...props}>
      {children}
    </section>
  )
}
