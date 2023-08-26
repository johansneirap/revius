import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Input,
} from '@nextui-org/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useSession, signOut } from 'next-auth/react'
import reviusLogo from '../../../public/img/logos/revius-banner.svg'
import ThemeChanger from './ThemeChanger'

const menuItems = [
  { label: 'Perfil', type: 'link', variant: 'primary', href: '/profile' },
  {
    label: 'Mi Configuración',
    type: 'link',
    variant: 'primary',
    href: '/ajustes',
  },
  { label: 'Actividad', type: 'link', variant: 'primary', href: '/actividad' },
  {
    label: 'Ayuda y Feedback',
    type: 'link',
    variant: 'primary',
    href: '/ayuda',
  },
  {
    label: 'Inicia sesión',
    type: 'button',
    color: 'primary',
    variant: 'solid',
    href: '/login',
  },
  {
    label: 'Regístrarse',
    type: 'button',
    color: 'primary',
    variant: 'bordered',
    href: '/register',
  },
] as const

const AuthButton = () => {
  const { data: session } = useSession()
  if (session === null)
    return (
      <Link href="/login">
        <Button variant="solid" color="primary">
          Inicia Sesión
        </Button>
      </Link>
    )
  return (
    <Button variant="bordered" color="primary" onClick={() => signOut()}>
      Cerrar Sesión
    </Button>
  )
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      isBordered
      className="shadow-md"
      maxWidth="xl"
      onMenuOpenChange={() => setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" className="flex items-end gap-1">
            <Image src={reviusLogo} alt="revius logo" />
            <span className="font-bold text-primary-500 leading-none text-xl">
              REVIUS
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex w-96">
        <Input
          classNames={{
            base: 'max-w-full',
            input: 'text-small',
            inputWrapper:
              'font-normal text-default-500 bg-slate-50 dark:bg-default-500/20',
          }}
          placeholder="Encuentra productos y servicios"
          size="md"
          variant="bordered"
          color="primary"
          startContent={<MagnifyingGlassIcon height={16} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          {/* <Link href="/login">
            <Button variant="solid" color="primary">
              Inicia Sesión
            </Button>
          </Link> */}
          <AuthButton />
        </NavbarItem>
        <NavbarItem>
          <ThemeChanger />
        </NavbarItem>

        {/* <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="/"
            variant="bordered"
            color="primary"
            size="md"
          >
            Regístrate
          </Button>
        </NavbarItem> */}

        <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden h-6"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            {item.type === 'button' ? (
              <Link href={item.href}>
                <Button
                  color="primary"
                  variant={item.variant ?? 'solid'}
                  className="w-full"
                  size="sm"
                >
                  {item.label}
                </Button>
              </Link>
            ) : (
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
