import { Button } from '@nextui-org/react'
import Image from 'next/image'
import googleIcon from '../../../public/img/social/google.svg'

export default function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="rounded-md"
      variant="bordered"
      onClick={onClick}
      fullWidth
    >
      <Image src={googleIcon} height={24} width={24} alt="google icon" />
      Continua con Google
    </Button>
  )
}
