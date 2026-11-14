export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <h2 className="bg-indigo-400 px-2 pt-2 text-2xl uppercase tracking-wide text-background font-luckiest-guy sm:text-3xl">
        {children}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
