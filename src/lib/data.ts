// ========== Languages =================== //
const languages = ['TypeScript', 'Rust', 'Python', 'SQL']

// ========== Stack ======================= //
const stack = [
  { label: "React", href: "https://react.dev" },
  { label: "Next.js", href: "https://nextjs.org" },
  { label: "TanStack Start", href: "https://tanstack.com/start" },
  { label: "SvelteKit", href: "https://svelte.dev/docs/kit" },
  { label: "Node.js", href: "https://nodejs.org" },
  { label: "Bun", href: "https://bun.sh" },
  { label: "Hono", href: "https://hono.dev" },
  { label: "PostgreSQL", href: "https://www.postgresql.org" },
  { label: "MongoDB", href: "https://www.mongodb.com" },
  { label: "Redis", href: "https://redis.io" },
  { label: "Drizzle ORM", href: "https://orm.drizzle.team" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com" },
  { label: "shadcn/ui", href: "https://ui.shadcn.com" },
  { label: "Tiptap", href: "https://tiptap.dev" },
  { label: "Docker", href: "https://www.docker.com" },
];

// ========== Projects =================== //

const projects = [
  {
    name: 'EnvX',
    description:
      'An opensource environment variable management tool that simplifies the process of managing and sharing environment variables across different projects and teams.',
    tags: ['Next.js', 'TypeScript', 'Rust', 'Postgres'],
    href: 'https://github.com/fakhyy/envx.git',
    accent: 'bg-gray-400',
    status: 'under development',
    disabled: true,
  },
  {
    name: 'kv CLI',
    description:
      'A lightweight Rust CLI for secure local key-value storage using SQLite, with optional full-database encryption powered by SQLCipher.',
    tags: ['Rust'],
    href: 'https://github.com/fakhyy/kv.git',
    accent: 'bg-red-400'
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

export { languages, stack, projects }
