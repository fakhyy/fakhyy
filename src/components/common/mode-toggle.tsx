import { useSound } from '~/hooks/use-sound'
import { clickSoftSound } from '~/components/soundcn/click-soft'
import { Button } from '~/components/ui/button'
import { MoonIcon, SunIcon } from '~/components/icons'
import { useTheme } from '~/components/providers/theme-provider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [play] = useSound(clickSoftSound);

  const handleClick = () => {
    play();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      size="icon-lg"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
