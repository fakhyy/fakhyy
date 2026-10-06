import { MoonIcon, SunIcon } from '~/components/icons'
import { useTheme } from '~/components/providers/theme-provider'
import { Button } from '~/components/ui/button'

export function Header() {
  const { theme, setTheme } = useTheme()
  return (
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
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </header>
  )
}
