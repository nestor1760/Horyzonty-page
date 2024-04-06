import { FC } from "react"
import { StyledButton } from "../../../../UI/Button"
import { useEvenItem } from "../../../../hooks/useEvenItem"
import { useAppDispatch } from "../../../../hook"
import { setShow } from "../../../../store/modalSlice"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Description, Image, Title, VoucherItemContainer } from "./VoucherItemStyles"
import { IVoucherItemProps } from "./interfaces"

const VouchersItem:FC<IVoucherItemProps> = ({voucher, index, inView}) => {
  const dispatch = useAppDispatch()
  const isEven = useEvenItem(index)  
  const {windowWidth} = useWindowWidth()

  const {description, image, title} = voucher

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  }  

  return (
    <VoucherItemContainer element={isEven} inView={inView} windowWidth={windowWidth}>
      <Description>{description}</Description>
      <Image src={image} alt={title}/>
      <Title>{title}</Title>
      <StyledButton onClick={showModal}>rezerwacja</StyledButton>
    </VoucherItemContainer>
  )
}

export default VouchersItem