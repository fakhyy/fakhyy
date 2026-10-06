import { SectionTitle } from '~/components/common'

export function AboutSection() {
  return (
    <section id="about" className="mt-28 scroll-mt-28">
      <SectionTitle>Full Story</SectionTitle>
      <div className="space-y-5 text-base leading-8 text-muted-foreground">
        <div className="text-xl space-y-5 bg-muted dark:bg-muted/30 rounded-3xl p-6 sm:p-8">
          <p>
            I started with software because I wanted to understand how things
            work. That curiosity gradually turned into building web
            applications, experimenting with systems, and learning how different
            layers of technology fit together.
          </p>
          <p>
            These days, I spend most of my time with{' '}
            <span className="text-foreground">TypeScript</span> and
            <span className="text-foreground">Rust</span>. I enjoy the web, but
            I am equally interested in what happens underneath it: operating
            systems, networking, databases, compilers, and the strange little
            details that make computers work.
          </p>
          <p>
            Outside programming, I keep coming back to mathematics, physics,
            philosophy, and questions about consciousness and reality. I like
            learning things for the sake of understanding them, not simply
            collecting another skill.
          </p>
        </div>
        <p className="text-xl italic text-foreground text-center border-l-4 p-4 border-l-primary bg-primary/10 dark:bg-primary/10">
          I don't wanna experience things through someone else's answers. I
          experience things for myself.
        </p>
      </div>
    </section>
  )
}
