import { Button } from '@nextui-org/react'
import fbIcon from '../../../public/img/social/facebook.svg'

import Image from 'next/image'
export default function FacebookButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="rounded-md"
      variant="bordered"
      onClick={onClick}
      fullWidth
    >
      <Image src={fbIcon} height={24} width={24} alt="Facebook icon" />
      Continúa con Facebook
    </Button>
  )
}
