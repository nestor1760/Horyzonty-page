import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hook"
import { setShow, setShowGallery } from "../../store/modalSlice"
import { setResponce } from "../../store/formSlice"
import { ModalContent, ModalOverlay } from "./ModalStyles"
import { IModal } from "./interfaces"

const Modal:FC<IModal> = ({children, show}) => {
  const {scroll} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()

  const closeModal = () => {
    dispatch(setShow({show: false, scroll: false}))
    dispatch(setShowGallery({showGallery: false, scroll: false}))
    setTimeout(() => {
      dispatch(setResponce(false))
    }, 300)
  }

  useEffect(() => {
    if(scroll) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    }
  }, [scroll])  

  return (
    <ModalOverlay onClick={() => closeModal()} className={show ? 'opened' : ''}>
        <ModalContent className={show ? 'active' : ''} onClick={e => e.stopPropagation()}>
          {children}
        </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
