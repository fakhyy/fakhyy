import { createFileRoute } from '@tanstack/react-router'
import { cn } from 'cn'
import { ArrowUpRight } from 'lucide-react'
import { useTheme } from '~/components/providers/theme-provider'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

const languages = ['TypeScript', 'Rust', 'Python', 'SQL']

const stack = [
  'React',
  'Next.js',
  'TanStack Start',
  'SvelteKit',
  'Node.js',
  'Bun',
  'Hono',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Drizzle',
  'Tailwind CSS',
  'shadcn/ui',
  'Tiptap',
  'Docker',
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      {' '}
      <h2 className="bg-indigo-400 px-2 pt-2 text-2xl uppercase tracking-wide text-background font-luckiest-guy sm:text-3xl">
        {' '}
        {children}{' '}
      </h2>{' '}
      <div className="h-px flex-1 bg-border" />{' '}
    </div>
  )
}

const projects = [
  {
    name: 'sellcalc',
    description:
      'A free collection of eBay, Amazon, and Etsy seller calculators for estimating marketplace fees, pricing, profit, and selling costs.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    href: 'https://sellcalc.org',
    accent: 'bg-gray-400',
    status: 'under development',
    disabled: true,
  },
  {
    name: 'StoryMe AI',
    description:
      'An open-source AI storytelling project that turns children’s images and ideas into personalized stories, poems, and educational content.',
    tags: ['TypeScript', 'AI', 'Open Source'],
    href: 'https://github.com/fakhyy/storyme-ai',
    accent: 'bg-indigo-400',
  },
  {
    name: 'fakhyy',
    description:
      'A personal website for sharing projects, writing, experiments, and thoughts on software engineering, Rust, TypeScript, systems, mathematics, physics, and philosophy.',
    tags: ['TanStack Start', 'TypeScript', 'Rust'],
    href: 'https://fakhyy.com',
    accent: 'bg-orange-400',
  },
  {
    name: '@fakhyy/retemp',
    description:
      'A type-safe React Email and Resend utility for building reusable transactional emails with automatic TypeScript prop inference.',
    tags: ['TypeScript', 'React Email', 'Resend'],
    href: 'https://www.npmjs.com/package/@fakhyy/retemp',
    accent: 'bg-sky-400',
  },
]

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
            <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
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

function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <header className="fixed mx-4 top-6 left-0 right-0 z-50 flex items-center justify-between bg-background/80 pl-6 pr-2 py-2  backdrop-blur-sm max-w-2xl md:mx-auto border rounded-2xl">
        <div className="flex gap-4 items-center">
          <a
            href="/"
            className="text-xl font-luckiest-guy uppercase tracking-wide"
          >
            <span className="text-primary">Fy.</span>
          </a>
        </div>
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          size="icon-lg"
        >
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xmlSpace="preserve"
            className="fill-foreground"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <circle
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  cx="32.003"
                  cy="32.005"
                  r="16.001"
                ></circle>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-foreground"
                  d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"
                ></path>{' '}
              </g>{' '}
            </g>
          </svg>
        </Button>
      </header>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:px-8 sm:pt-24 mt-20">
        {/* Hero */}
        <section id="hero" className="space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              {' '}
              Software Engineer · Builder · Curious mind{' '}
            </p>

            <h1 className="text-5xl font-luckiest-guy tracking-wide sm:text-6xl">
              M. <span className="text-emerald-500">Fakhar</span>{' '}
              <span>Sultan</span>
            </h1>

            <p className="max-w-2xl text-2xl leading-relaxed">
              Software engineer exploring code, systems, and the ideas behind
              them.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href="mailto:hello@fakhyy.com"
              className="group flex items-center gap-3 rounded-xl border-2  p-4 transition-colors hover:bg-accent/50"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=fill">
                  <g id="email">
                    <path
                      id="Subtract"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                      className="fill-foreground"
                    />
                  </g>
                </g>
              </svg>
              <span className="text-sm">Email</span>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://github.com/fakhyy"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl border-2  p-4 transition-colors hover:bg-accent/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <g id="logo-github">
                  <path
                    id="Subtract"
                    className="fill-foreground"
                    d="M12 2c5.5228 0 10 4.47715 10 10 0 4.5716 -3.0686 8.4239 -7.2578 9.6162v-3.0117c0 -0.7275 -0.1595 -1.4465 -0.4678 -2.1055 2.1883 -0.7822 4.2783 -2.4447 4.2783 -4.4355 0 -1.2663 -0.4671 -2.75174 -1.5127 -3.63186V6l-2.9462 0.98828c-0.6589 -0.16036 -1.3628 -0.24706 -2.0938 -0.24707 -0.731 0 -1.4349 0.08673 -2.09375 0.24707L6.95996 6v2.43164c-1.04555 0.88009 -1.51163 2.36566 -1.51172 3.63186 0 1.9907 2.08913 3.6533 4.27735 4.4355 -0.26358 0.5635 -0.41862 1.1711 -0.45801 1.7901 -0.13854 0.0283 -0.25191 0.0415 -0.34473 0.04 -0.20756 -0.0033 -0.36606 -0.06 -0.51953 -0.1562 -1.11532 -0.7 -1.54401 -1.9835 -3.05566 -2.1543 -0.19076 -0.0214 -0.3474 0.1371 -0.34766 0.3291 0 0.1922 0.15921 0.3423 0.34473 0.3925 1.44216 0.39 1.42755 3.2266 3.54785 3.2598 0.11976 0.0019 0.24101 -0.0069 0.36426 -0.0186v1.6348C5.06807 20.4236 2 16.5713 2 12 2 6.47715 6.47715 2 12 2"
                    strokeWidth={1}
                  />
                </g>
              </svg>
              <span className="text-sm">GitHub</span>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://linkedin.com/in/fakhyy"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl border-2  p-4 transition-colors hover:bg-accent/50"
            >
              <svg
                className="size-5 fill-foreground"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 504.4 504.4"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <g>
                      {' '}
                      <path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6 C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8 c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6 c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"></path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
              <span className="text-sm">LinkedIn</span>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* <p className="max-w-xl text-3xl leading-10 tracking-wider text-justify text-muted-foreground">
              I build software to understand things, solve problems, and turn
              ideas into something real. I work primarily with{' '}
              <span className="text-foreground">Rust</span>,{' '}
              <span className="text-foreground">TypeScript</span>, and modern web
              technologies, while exploring systems, mathematics, physics, and
              philosophy.
            </p> */}
        </section>

        <section id="about" className="mt-28 scroll-mt-28">
          {' '}
          <SectionTitle>Full Story</SectionTitle>{' '}
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            {' '}
            <div className="text-xl space-y-5 bg-muted dark:bg-muted/30 rounded-3xl p-6 sm:p-8">
              <p>
                {' '}
                I started with software because I wanted to understand how
                things work. That curiosity gradually turned into building web
                applications, experimenting with systems, and learning how
                different layers of technology fit together.{' '}
              </p>{' '}
              <p>
                {' '}
                These days, I spend most of my time with{' '}
                <span className="text-foreground">TypeScript</span> and{' '}
                <span className="text-foreground">Rust</span>. I enjoy the web,
                but I am equally interested in what happens underneath it:
                operating systems, networking, databases, compilers, and the
                strange little details that make computers work.{' '}
              </p>{' '}
              <p>
                {' '}
                Outside programming, I keep coming back to mathematics, physics,
                philosophy, and questions about consciousness and reality. I
                like learning things for the sake of understanding them, not
                simply collecting another skill.{' '}
              </p>{' '}
            </div>
            <p className="font-serif text-lg italic text-foreground text-center border-l-4 p-4 border-l-primary bg-primary/10 dark:bg-primary/10">
              {' '}
              I don't wanna experience things through someone else's answers. I
              experience things for myself.{' '}
            </p>{' '}
          </div>{' '}
        </section>

        <section id="projects" className="mt-28 scroll-mt-28">
          {' '}
          <SectionTitle>Projects</SectionTitle>{' '}
          <div className="grid gap-4 sm:grid-cols-2">
            {' '}
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}{' '}
          </div>{' '}
          <div className="mt-5 flex justify-end">
            {' '}
            <a
              href="https://github.com/fakhyy"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {' '}
              Explore more on GitHub{' '}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />{' '}
            </a>{' '}
          </div>{' '}
        </section>

        {/* Languages */}
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

        {/* Stack */}
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

        {/* Contact */}
        <section id="contact" className="mt-32">
          {' '}
          <SectionTitle>Get in touch</SectionTitle>{' '}
          <div className="rounded-2xl border-2 bg-muted/30 p-6 sm:p-8">
            {' '}
            <p className="max-w-xl text-2xl leading-9 tracking-tight sm:text-3xl">
              {' '}
              Have an idea, want to build something, or just want to talk about
              technology?{' '}
            </p>{' '}
            <a
              href="mailto:hello@fakhyy.com"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              {' '}
              Say hello{' '}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />{' '}
            </a>{' '}
          </div>{' '}
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-col gap-2 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Fakhar Sultan</span>
          <span>Somewhere on Planet Earth.</span>
        </footer>
      </div>
    </main>
  )
}
