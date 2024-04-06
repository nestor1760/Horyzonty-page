import { ItemHeader } from "../../../../styled-components/ItemHeader"
import { NavigationItem } from "../../../../styled-components/NavigationItem"
import { dataVoucher } from "../../../../data/dataVoucher"
import VouchersItem from "../VoucherItem/VoucherItem"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { vouchersDataRest } from "../../../../dataAPI/vouchersRest"
import Modal from "../../../../UI/Modal"
import ReservationForm from "../../../ReservationForm/Components/ReservationForm"
import { useInView } from "react-intersection-observer"
import { StyledContainer, Text, VoucherList } from "./VouchersPartStyles"
import { IVouchersPartProps } from "./interfaces"

const VouchersPart = ({ id }: IVouchersPartProps) => {
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