import { SectionTitle } from '~/components/common'
import { stack } from '~/lib/data'

export function StackSection() {
  return (
    <section id="stack" className="mt-24">
      <SectionTitle>Stack</SectionTitle>

      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {stack.map((item) => (
          <span
            key={item}
            className="text-sm text-muted-foreground hover:text-foreground font-mono bg-muted px-2 py-0.5 rounded-2xl "
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
