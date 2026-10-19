// ========== Languages =================== //
const languages = ['TypeScript', 'Rust', 'Python', 'SQL']

// ========== Stack ======================= //
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

// ========== Projects =================== //

const projects = [
  {
    name: 'kv CLI',
    description:
      'A lightweight Rust CLI for secure local key-value storage using SQLite, with optional full-database encryption powered by SQLCipher.',
    tags: ['Rust'],
    href: 'https://github.com/fakhyy/kv-cli.git',
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

export { languages, stack, projects }
