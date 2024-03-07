import styled, { keyframes } from "styled-components"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { Container } from "../../styled-components/Container"
import { dataNightStay } from "../../data/dataNightStay"
import NightItem from "./NightItem"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 126px 0;
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

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
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

type TImage = {
  top?: string,
  right?: string,
  left?: string,
  bottom?: string,
  margin?: string,
}

const Image = styled.img<TImage>`
  display: inline-block;
  min-width: 705px; 
  width: 100%;
  height: 425px;
  object-fit: cover; 
  position: absolute;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  margin: ${props => props.margin || ''};
  top: ${props => props.top || ''};
  right: ${props => props.right || ''};
  bottom: ${props => props.bottom || ''};
  left: ${props => props.left || ''};
`

const StyledItem = styled.div`
  width: 50%;
  height: 734px;
  display: flex;
  align-item: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  &:first-child {
    justify-content: flex-end;
    margin-right: 30px;
  }
`

const Title = styled.p`
  width: 540px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 68px;
  animation: ${slideLeft} 0.5s ease-in-out forwards;
`

const NightStayPart = () => {
  return (
    <StyledContainer>
      <ItemHeader margin="100px 0 157px 0">
        <NavigationItem fontSize="24px">nocleg pod gołym niebem</NavigationItem>
        <Text>Wyruszając na trzydniową wycieczkę na Rysy, nocowanie w namiotach stanowi niezapomniany element zbliżenia się do natury i poczucia prawdziwej przygody.</Text>
      </ItemHeader>
        <Container width="1110px" display="flex" justify="flex-start">
          <StyledItem>
            <Image src="/media/stay1image.png" alt="adad" top='0' right="0"/>
            <Container width="100%" justify="space-between" align="flex-start" margin="0">
              <NightItem item={dataNightStay[2]}/>              
              <NightItem item={dataNightStay[3]}/>              
            </Container>
          </StyledItem>
          <StyledItem>
            <Title>Podczas noclegu w namiotach otrzymasz:</Title>
            <Container width="100%" justify="space-between" align="flex-start" margin="0">
              <NightItem item={dataNightStay[0]}/>              
              <NightItem item={dataNightStay[1]}/>              
            </Container>
            <Image src="/media/stay2image.png" alt="adad" bottom='0' left="0" />
          </StyledItem>
        </Container>
    </StyledContainer>
  )
}

export default NightStayPart