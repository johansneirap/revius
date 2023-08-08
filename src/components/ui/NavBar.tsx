import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Input,
} from '@nextui-org/react'
import Link from 'next/link'
// import { useEffect, useRef } from 'react'
import { SearchIcon } from './icons/SearchIcon'
import ReviusLogo from './icons/ReviusLogo'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]
  return (
    <Navbar
      onMenuOpenChange={() => setIsMenuOpen}
      className="bg-gradient-to-r from-blue-700 to-blue-500 text-slate-50"
    >
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <ReviusLogo width="40" height="40" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="#">
            ¿Por qué Revius?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Únete a la comunidad
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Lo más visto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem]',
            input: 'text-small',
            inputWrapper:
              'font-normal text-default-500 bg-slate-50 dark:bg-default-500/20',
          }}
          placeholder="Buscar..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Inicia Sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            size="sm"
            className="text-slate-50 rounded-sm"
          >
            Regístrate
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
