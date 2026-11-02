import { SectionTitle } from '~/components/common'
import { stack } from '~/lib/data'

export function StackSection() {
  return (
    <section id="stack" className="mt-24">
      <SectionTitle>Stack</SectionTitle>

      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {stack.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-muted px-2 py-0.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}
