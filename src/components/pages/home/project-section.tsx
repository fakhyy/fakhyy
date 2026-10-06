import { cn } from 'cn'
import { ArrowUpRightIcon } from 'lucide-react'
import { SectionTitle } from '~/components/common'
import { projects } from '~/lib/data'

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const content = (
    <div
      className={cn(
        'group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 bg-accent/10 dark:bg-accent/20 h-full',
        !project.disabled && 'hover:-translate-y-1 hover:shadow-lg',
        project.disabled && 'cursor-default opacity-70',
      )}
    >
      <div
        className={cn(
          'absolute right-5 top-5 rounded-full',
          project.accent,
          project.status ? 'px-2 font-mono text-sm text-neutral-900' : 'size-3',
        )}
      >
        {project.status}
      </div>

      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Project
        </span>
      </div>

      <div className="">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>

          {!project.disabled && (
            <ArrowUpRightIcon className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          )}
        </div>

        <p className="mb-5 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 font-mono text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  if (project.disabled) {
    return content
  }

  return (
    <a
      href={project.href}
      target={project.href.startsWith('http') ? '_blank' : undefined}
      rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {content}
    </a>
  )
}

export function ProjectSection() {
  return (
    <section id="projects" className="mt-28 scroll-mt-28">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="mt-5 flex justify-end">
        <a
          href="https://github.com/fakhyy"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Explore more on GitHub
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />{' '}
        </a>
      </div>
    </section>
  )
}
