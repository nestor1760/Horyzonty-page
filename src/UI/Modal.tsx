import { FC, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { IModal } from "../types/types"
import { useAppDispatch, useAppSelector } from "../hook"
import { setShow } from "../store/modalSlice"
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    background-color: transparent;
    backdrop-filter: blur(0);
    z-index: 0;
  }
  to {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(3px);
    z-index: 10;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(3px);
    z-index: 10;
  }
  to {
    opacity: 0;
    background-color: transparent;
    backdrop-filter: blur(0);
    z-index: 0;
  }
`

const StyledModal = styled.div<{ show: boolean | undefined}>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 0;
  animation: ${({ show }) => show === undefined ? null : (show ? fadeIn : fadeOut)} 250ms ease-in-out forwards;
`

const ModalContent = styled.div<{show: boolean | undefined}>`
    background-color: #fff;
    animation: ${({ show }) => show === undefined ? null : (show ? slideDown : slideUp)} 250ms ease-in-out forwards;
    opacity: ${({ show }) => show ? '1' : '0'};
    pointer-events: ${({ show }) => show ? 'auto' : 'none'};
`

const Modal:FC<IModal> = ({children}) => {
  const {show, scroll} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()

  const closeModal = () => {
    dispatch(setShow({show: false, scroll: false}))
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
    <StyledModal show={show} onClick={() => closeModal()}>
        <ModalContent show={show} onClick={e => e.stopPropagation()}>
          {children}
        </ModalContent>
    </StyledModal>
  )
}

export default Modal