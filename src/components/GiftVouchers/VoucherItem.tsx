import { FC } from "react"
import styled, { keyframes } from "styled-components"
import { IVoucherItemProps } from "../../types/types"
import { StyledButton } from "../../UI/Button"
import { useEvenItem } from "../../hooks/useEvenItem"

const VoucherItemContainer = styled.div<{ element: boolean | undefined}>`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  animation: ${({ element }) => (element ? slideUp : slideDown)} 0.5s ease-in-out forwards;
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

const VouchersItem:FC<IVoucherItemProps> = ({voucher, index}) => {
  const {description, image, title} = voucher
  const isEven = useEvenItem(index)  


  return (
    <VoucherItemContainer element={isEven}>
      <Description>{description}</Description>
      <Image src={image} alt={title}/>
      <Title>{title}</Title>
      <StyledButton>rezerwacja</StyledButton>
    </VoucherItemContainer>
  )
}

export default VouchersItem