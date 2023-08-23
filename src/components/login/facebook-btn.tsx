import { Button } from '@nextui-org/react'
export default function FacebookButton({ onClick }: { onClick: () => void }) {
  return (
    <Button color="primary" onClick={onClick} fullWidth>
      Continua con Facebook
    </Button>
  )
}
