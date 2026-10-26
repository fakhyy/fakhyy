import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="fixed mx-4 top-0 left-0 right-0 z-50 flex items-center justify-between bg-background/80 pl-6 pr-2 py-4 backdrop-blur-sm max-w-2xl md:mx-auto">
      <div className="flex gap-4 items-center">
        <a href="/" className="text-xl">
          <span className="font-medium">@fakhyy</span>
        </a>
      </div>
      <ModeToggle />
    </header>
  )
}
