import { useState } from "react"


type TUseDiscloser = {
    isOpen : boolean,
    onOpen : () => void,
    onClose : () => void
}

const useDiscloser = (value: boolean = false) : TUseDiscloser => {
  const [open, setOpen] = useState<boolean>(value)

  const onOpen = () => setOpen(true)

  const onClose = () => setOpen(false)

  return {
    isOpen: open,
    onOpen: onOpen,
    onClose: onClose,
  }
}


export default useDiscloser;
