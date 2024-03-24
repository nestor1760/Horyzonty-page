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

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    align-items: center;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    padding: 0 16px;
    align-items: center;
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

const Text = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 100%;
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`

const VoucherList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 58px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    padding: 0 16px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
  }

  @media (max-width: 480px) {
    width: 375px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
  }
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
          <NavigationItem width="350px" fontSize="24px" id={id}>karty podarunkowe</NavigationItem>
          <Text inView={voucherIsVisible}>
            Certyfikat podarunkowy na wycieczkę w góry to wspaniały sposób, aby obdarować kogoś niezapomnianymi wrażeniami i relaksem na łonie natury.
          </Text>
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