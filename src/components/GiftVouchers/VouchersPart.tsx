import styled, { css, keyframes } from "styled-components"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { dataVoucher } from "../../data/dataVoucher"
import VouchersItem from "./VoucherItem"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hook"
import { vouchersDataRest } from "../../dataAPI/vouchersRest"
import Modal from "../../UI/Modal"
import ReservationForm from "../ReservationForm"
import { useInView } from "react-intersection-observer"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;
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

const Text = styled.p<{ inView: boolean}>`
  width: 100%;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};
`

const VoucherList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 58px;
`


const VouchersPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.voucher)
  const {show} = useAppSelector(state => state.modal)

  const {ref: voucherRef, inView: voucherIsVisible} = useInView()

  useEffect(() => {
    dispatch(vouchersDataRest(dataVoucher))
  }, [])

  return (
    <>
      <StyledContainer ref={voucherRef}>
        <ItemHeader margin="56px 0 127px 0">
          <NavigationItem fontSize="24px" id={id}>karty podarunkowe</NavigationItem>
          <Text inView={voucherIsVisible}>Certyfikat podarunkowy na wycieczkę w góry to wspaniały sposób, aby obdarować kogoś niezapomnianymi wrażeniami i relaksem na łonie natury.</Text>
        </ItemHeader>
        <VoucherList>
          {array.map((voucher, index) => 
            <VouchersItem index={index} key={voucher.id} voucher={voucher} inView={voucherIsVisible}/>
          )}
        </VoucherList>
      </StyledContainer>
      <Modal show={show}>
        <ReservationForm />
      </Modal>
    </>
  )
}

export default VouchersPart