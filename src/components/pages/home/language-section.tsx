import { SectionTitle } from '~/components/common'
import { languages } from '~/lib/data'

export function LanguageSection() {
  return (
    <section id="languages" className="mt-20">
      <SectionTitle>Languages</SectionTitle>

      <div className="flex flex-wrap gap-2">
        {languages.map((language) => (
          <span
            key={language}
            className="rounded-lg bg-muted px-4 py-2 text-sm tracking-wider font-mono"
          >
            {language}
          </span>
        ))}
      </div>
    </section>
  )
}
