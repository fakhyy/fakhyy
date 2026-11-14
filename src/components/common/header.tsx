import { useNavigate } from '@tanstack/react-router'
import { GithubIcon } from '~/components/icons'
import { Button } from '~/components/ui/button'
import { ModeToggle } from './mode-toggle'
import { PORTFOLIO_GITHUB_REPO } from '~/lib/constant'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="fixed mx-4 top-0 left-0 right-0 z-50 flex items-center justify-between bg-background/80 sm:pl-2 sm:pr-2 py-4 backdrop-blur-sm max-w-2xl sm:mx-auto">
      <div className="flex gap-4 items-center rounded-full">
        <a href="/">
          <img src="/images/yellow-dude.png" alt="" className="size-12" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon-lg"
          onClick={() =>
            navigate({
              href: PORTFOLIO_GITHUB_REPO,
            })
          }
        >
          <GithubIcon />
        </Button>
      </div>
    </header>
  )
}
