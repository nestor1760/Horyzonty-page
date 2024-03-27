import { FC } from "react"
import styled, { css, keyframes } from "styled-components"
import { IVoucherItemProps } from "../../types/types"
import { StyledButton } from "../../UI/Button"
import { useEvenItem } from "../../hooks/useEvenItem"
import { useAppDispatch } from "../../hook"
import { setShow } from "../../store/modalSlice"
import { useWindowWidth } from "../../hooks/useWindowWidth"

const VoucherItemContainer = styled.div<{ element: boolean | undefined, inView: boolean, windowWidth: number}>`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  ${({ inView, element, windowWidth }) => inView && css`
    animation: ${(windowWidth < 1109 ? slideLeftAnimation : element ? slideUp : slideDown)} 0.5s ease-in-out forwards;
  `};

  @media (max-width: 1109px) {
    margin-bottom: 40px;
  }
`
const slideLeftAnimation = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  text-transform: upper-case;
  margin: 30px 0 20px 0;
`

const VouchersItem:FC<IVoucherItemProps> = ({voucher, index, inView}) => {
  const dispatch = useAppDispatch()
  const isEven = useEvenItem(index)  
  const {windowWidth} = useWindowWidth()

  const {description, image, title} = voucher

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  }  

  return (
    <VoucherItemContainer 
      element={isEven} 
      inView={inView} 
      windowWidth={windowWidth}
    >
      <Description>{description}</Description>
      <Image src={image} alt={title}/>
      <Title>{title}</Title>
      <StyledButton onClick={() => showModal()}>rezerwacja</StyledButton>
    </VoucherItemContainer>
  )
}

export default VouchersItem