import { ArrowUpRightIcon } from 'lucide-react'
import { EmailIcon, GithubIcon, LinkedinIcon } from '~/components/icons'
import { SOCIAL_LINKS } from '~/lib/constant'

const socialLinks = [
  {
    name: 'Email',
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: EmailIcon,
  },
  {
    name: 'GitHub',
    href: SOCIAL_LINKS.github,
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: LinkedinIcon,
  },
]

export function SocialLinkCard({
  link,
}: {
  link: (typeof socialLinks)[number]
}) {
  return link.name === 'Email' ? (
    <a
      href={link.href}
      className="group flex items-center gap-3 rounded-xl border-2  p-4 transition-colors hover:bg-accent/50"
    >
      <link.icon />
      <span className="text-sm">{link.name}</span>
      <ArrowUpRightIcon className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  ) : (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl border-2  p-4 transition-colors hover:bg-accent/50"
    >
      <link.icon />
      <span className="text-sm">{link.name}</span>
      <ArrowUpRightIcon className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

export function HeroSection() {
  return (
    <section id="hero" className="space-y-8">
      <div className="space-y-4">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Software Engineer · Builder · Curious mind
        </p>

        <h1 className="text-5xl font-luckiest-guy tracking-wide sm:text-6xl">
          M. <span className="text-emerald-500">Fakhar </span>
          <span>Sultan</span>
        </h1>

        <p className="max-w-2xl text-2xl leading-relaxed">
          Software engineer exploring code, systems, and the ideas behind them.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {socialLinks.map((link) => (
          <SocialLinkCard link={link} />
        ))}
      </div>
    </section>
  )
}
