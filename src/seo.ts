import appCss from '~/styles/globals.css?url'

export const meta = [
  {
    charSet: 'utf-8',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
  {
    name: 'apple-mobile-web-app-title',
    content: 'Fakhar Sultan',
  },
  {
    title: 'Fakhar Sultan - Software Engineer',
  },
  {
    name: 'description',
    content:
      'Fakhar Sultan is a software engineer exploring code, systems, and the ideas behind them. Building with TypeScript, Rust, and modern web technologies.',
  },
  {
    name: 'author',
    content: 'Fakhar Sultan',
  },
  {
    name: 'creator',
    content: 'Fakhar Sultan',
  },
  {
    name: 'keywords',
    content:
      'Fakhar Sultan, Fakhar, Sultan, Fakhar Sultan Software Engineer, Fakhar Sultan Software Developer, Fakhar Sultan Web Developer, Fakhar Sultan TypeScript, Fakhar Sultan Rust, Fakhar Sultan React, Fakhar Sultan Next.js, Fakhar Sultan Node.js, Fakhar Sultan Full Stack Developer, software engineer, software developer, TypeScript, Rust, React, Next.js, TanStack, web development, systems programming',
  },
  {
    name: 'robots',
    content:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  {
    name: 'theme-color',
    content: '#141414',
  },

  // Open Graph metadata

  {
    property: 'og:title',
    content: 'Fakhar Sultan - Software Engineer',
  },
  {
    property: 'og:description',
    content:
      'Software engineer exploring code, systems, and the ideas behind them.',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:url',
    content: 'https://fakhyy.com',
  },
  {
    property: 'og:site_name',
    content: 'Fakhar Sultan',
  },
  {
    property: 'og:image',
    content: '/og-image.png',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'og:image:alt',
    content: 'Fakhar Sultan — Software Engineer',
  },

  // Twitter Card metadata
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: 'Fakhar Sultan — Software Engineer',
  },
  {
    name: 'twitter:description',
    content:
      'Software engineer exploring code, systems, and the ideas behind them.',
  },
  {
    name: 'twitter:url',
    content: 'https://fakhyy.com',
  },
  {
    name: 'twitter:image',
    content: '/og-image.png',
  },
  {
    name: 'twitter:image:alt',
    content: 'Fakhar Sultan — Software Engineer',
  },
  {
    name: 'twitter:creator',
    content: '@fakhyy',
  },

  // Profile Information
  {
    property: 'profile:first_name',
    content: 'Fakhar',
  },
  {
    property: 'profile:last_name',
    content: 'Sultan',
  },
  {
    property: 'profile:username',
    content: 'fakhyy',
  },
]

export const links = [
  {
    rel: 'stylesheet',
    href: appCss,
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon-96x96.png',
    sizes: '96x96',
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg',
  },
  {
    rel: 'shortcut icon',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    href: '/apple-touch-icon.png',
    sizes: '180x180',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
]

export const scripts = [
  {
    defer: true,
    src: 'https://cloud.umami.is/script.js',
    'data-website-id': '7603e2a9-b208-407f-8e92-b002e37c7803',
  },
  {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://fakhyy.com/#person',
          name: 'Fakhar Sultan',
          alternateName: ['Fakhyy', 'M. Fakhar Sultan'],
          url: 'https://fakhyy.com/',
          jobTitle: 'Software Engineer',
          description:
            'Software engineer focused on TypeScript, Rust, modern web development, and systems programming.',
          sameAs: [
            'https://github.com/fakhyy',
            'https://linkedin.com/in/fakhyy',
          ],
          knowsAbout: [
            'Software Engineering',
            'TypeScript',
            'Rust',
            'React',
            'Next.js',
            'TanStack',
            'Node.js',
            'Hono',
            'PostgreSQL',
            'Systems Programming',
            'Web Development',
          ],
        },

        {
          '@type': 'WebSite',
          '@id': 'https://fakhyy.com/#website',
          url: 'https://fakhyy.com/',
          name: 'Fakhar Sultan',
          description:
            'Personal website of Fakhar Sultan, a software engineer exploring code, systems, and the ideas behind them.',
          publisher: {
            '@id': 'https://fakhyy.com/#person',
          },
        },
      ],
    }),
  },
]
