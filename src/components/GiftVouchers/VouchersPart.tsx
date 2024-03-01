import styled, { keyframes } from "styled-components"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { dataVoucher } from "../../data/dataVoucher"
import VouchersItem from "./VoucherItem"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
const slideLeft = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Text = styled.p`
  width: 100%;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
  animation: ${slideLeft} 0.5s ease-in-out forwards;
`

const VoucherList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 58px;
`


const VouchersPart = () => {
  return (
    <StyledContainer>
      <ItemHeader margin="56px 0 127px 0">
        <NavigationItem fontSize="24px">karty podarunkowe</NavigationItem>
        <Text>Certyfikat podarunkowy na wycieczkę w góry to wspaniały sposób, aby obdarować kogoś niezapomnianymi wrażeniami i relaksem na łonie natury.</Text>
      </ItemHeader>
      <VoucherList>
        {dataVoucher.map((voucher, index) => 
          <VouchersItem index={index} key={voucher.id} voucher={voucher}/>
        )}
      </VoucherList>
    </StyledContainer>
  )
}

export default VouchersPart