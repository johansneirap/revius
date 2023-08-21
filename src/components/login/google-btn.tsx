import { Button } from '@nextui-org/react'
import Link from 'next/link'
export default function GoogleButton() {
  return (
    <Link className="w-full" href="http://localhost:3001/auth/google">
      <Button color="secondary" fullWidth>
        Continua con Google
      </Button>
    </Link>
  )
}
