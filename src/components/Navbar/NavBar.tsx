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
  User,
} from '@nextui-org/react'
import { useSession, signOut } from 'next-auth/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import reviusLogo from '../../../public/img/logos/revius-banner.svg'
import ThemeChanger from '../ui/ThemeChanger'
import AuthButton from './AuthButton'
import { MENU_ITEMS } from './constants'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { data: session } = useSession()

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
          <AuthButton />
        </NavbarItem>
        <NavbarItem>
          <ThemeChanger />
        </NavbarItem>

        <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden h-6"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {session && (
          <NavbarMenuItem>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: session?.user?.image,
              }}
              className="transition-transform pt-4"
              description="Reviuer"
              name={session?.user?.name}
            />
          </NavbarMenuItem>
        )}
        {MENU_ITEMS.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link className="w-full" href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {session ? (
          <NavbarMenuItem>
            <Button
              color="danger"
              variant="flat"
              className="w-full"
              size="sm"
              radius="sm"
              onClick={() => signOut()}
            >
              Cerrar sesión
            </Button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Link href="/login">
                <Button
                  color="primary"
                  variant="solid"
                  className="w-full"
                  size="sm"
                  radius="sm"
                >
                  Inicia sesión
                </Button>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/registro">
                <Button
                  color="primary"
                  variant="bordered"
                  className="w-full"
                  size="sm"
                  radius="sm"
                >
                  Regístrate
                </Button>
              </Link>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  )
}
