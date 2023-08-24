import { Button } from '@nextui-org/react'
export default function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <Button color="secondary" onClick={onClick} fullWidth>
      Continua con Google
    </Button>
  )
}
