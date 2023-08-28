import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import {
  Button,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { UserSession } from '@/types/User'
import Link from 'next/link'

export default function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    const { user }: { user: UserSession } = session
    return (
      <>
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: user.image,
              }}
              className="transition-transform"
              description="Reviuer"
              name={user.name}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Sesión iniciada como</p>
              <p className="font-bold">{user.email}</p>
            </DropdownItem>
            <DropdownItem key="perfil">Perfil</DropdownItem>
            <DropdownItem key="settings">Ajustes</DropdownItem>
            <DropdownItem key="team_settings">Actividad</DropdownItem>
            <DropdownItem key="help_and_feedback">
              Ayuda y Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    )
  }

  if (session === null)
    return (
      <Link href="/login">
        <Button variant="solid" color="primary" radius="sm">
          Inicia Sesión
        </Button>
      </Link>
    )

  return null
}
