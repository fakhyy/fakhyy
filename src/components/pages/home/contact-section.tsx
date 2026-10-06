import { ArrowUpRightIcon } from 'lucide-react'
import { SectionTitle } from '~/components/common'

export function ContactSection() {
  return (
    <section id="contact" className="mt-32">
      <SectionTitle>Get in touch</SectionTitle>
      <div className="rounded-2xl border-2 bg-muted/30 p-6 sm:p-8">
        <p className="max-w-xl text-2xl leading-9 tracking-tight sm:text-3xl">
          Have an idea, want to build something, or just want to talk about
          technology?
        </p>
        <a
          href="mailto:hello@fakhyy.com"
          className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Say hello
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />{' '}
        </a>
      </div>
    </section>
  )
}
