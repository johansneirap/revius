import { Button } from '@nextui-org/react'
import Link from 'next/link'
export default function FacebookButton() {
  return (
    <Link className="w-full" href="http://localhost:3001/auth/facebook">
      <Button color="primary" fullWidth>
        Continua con Facebook
      </Button>
    </Link>
  )
}
