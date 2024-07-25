import { Button, DropdownMenu } from '@radix-ui/themes'
import logoSrc from '@/assets/images/logo.svg'
import hamburgerIconSrc from '@/assets/images/icon-hamburger.svg'
import closeIconSrc from '@/assets/images/icon-close.svg'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = (open: boolean) => setOpen(open)

  return (
    <header className="sticky bg-white top-0 z-50">
      <div className="max-w-6xl mx-auto py-6 lg:py-0 px-6 flex justify-between items-center">
        <div className="lg:p-4">
          <img alt="Easybank Icon" src={logoSrc} />
        </div>
        <ul className="hidden lg:flex gap-8 text-sm py-8 text-neutral-gray-blue">
          <li><a className="nav-link" href="#">Home</a></li>
          <li><a className="nav-link" href="#">About</a></li>
          <li><a className="nav-link" href="#">Contact</a></li>
          <li><a className="nav-link" href="#">Blog</a></li>
          <li><a className="nav-link" href="#">Careers</a></li>
        </ul>
        <DropdownMenu.Root open={open} onOpenChange={handleOpen}>
          <DropdownMenu.Trigger>
            <Button variant="ghost" className="lg:hidden">
              <img alt="Menu Icon" src={open ? closeIconSrc : hamburgerIconSrc} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Share</DropdownMenu.Item>
            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Button radius='full' className="cta-btn hidden lg:inline-flex">Request Invite</Button>
      </div>
    </header>
  )
}

export default Navbar
