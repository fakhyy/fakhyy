import { Footer, Header } from '~/components/common'
import { ContactSection } from './contact-section'
import { StackSection } from './stack-section'
import { LanguageSection } from './language-section'
import { ProjectSection } from './project-section'
import { AboutSection } from './about-section'
import { HeroSection } from './hero-section'

export function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Header />
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:px-8 sm:pt-24 mt-20">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <LanguageSection />
        <StackSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
