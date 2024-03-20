import { FC, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { IModal } from "../types/types"
import { useAppDispatch, useAppSelector } from "../hook"
import { setShow, setShowGallery } from "../store/modalSlice"
import { setResponce } from "../store/formSlice"

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`

const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: -1;
  transition: 0.2s;
  opacity: 0;
  background-color: transparent;
  backdrop-filter: blur(0);
  &.opened {
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(3px);
  }
`

const ModalContent = styled.div`
  background-color: #fff;
  animation: ${slideUp} 0.3s ease-in-out forwards;
  opacity: 0;
  pointer-events: none;
  &.active {
    animation: ${slideDown} 0.3s ease-in-out forwards;
    opacity: 1;
    pointer-events: auto;
  }
`

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
