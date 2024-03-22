import styled, { css, keyframes } from "styled-components"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { Container } from "../../styled-components/Container"
import { dataNightStay } from "../../data/dataNightStay"
import NightItem from "./NightItem"
import { useAppDispatch, useAppSelector } from "../../hook"
import { useEffect } from "react"
import { nightStayDataRest } from "../../dataAPI/nightStayRest"
import { useInView } from "react-intersection-observer"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 126px 0;
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

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
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
`

type TImage = {
  top?: string,
  right?: string,
  left?: string,
  bottom?: string,
  margin?: string,
  inView: boolean,
}

const Image = styled.img<TImage>`
  display: inline-block;
  min-width: 705px; 
  width: 100%;
  height: 425px;
  object-fit: cover; 
  position: absolute;
  ${({ inView }) => inView && css`
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  `};
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

const Title = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 68px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};
`

const NightStayPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.guide)  

  const {ref: nightStayRef, inView: nightStayIsVisible} = useInView()

  useEffect(() => {
    dispatch(nightStayDataRest(dataNightStay))
  }, [])

  return (
    <StyledContainer ref={nightStayRef}>
      <ItemHeader margin="100px 0 157px 0">
        <NavigationItem width="411px" fontSize="24px" id={id}>nocleg pod gołym niebem</NavigationItem>
        <Text inView={nightStayIsVisible}>Wyruszając na trzydniową wycieczkę na Rysy, nocowanie w namiotach stanowi niezapomniany element zbliżenia się do natury i poczucia prawdziwej przygody.</Text>
      </ItemHeader>
        <Container width="1110px" display="flex" justify="flex-start">
          <StyledItem>
            <Image inView={nightStayIsVisible} src="/media/stay1image.png" alt="adad" top='0' right="0"/>
            {(array.length > 0)
              ?
                <Container width="100%" justify="space-between" align="flex-start" margin="0">
                  <NightItem inView={nightStayIsVisible} item={array[2]}/>              
                  <NightItem inView={nightStayIsVisible} item={array[3]}/>              
                </Container>
              :
                null
            }
          </StyledItem>
          <StyledItem>
            <Title inView={nightStayIsVisible}>Podczas noclegu w namiotach otrzymasz:</Title>
            {(array.length > 0)
              ?
                <Container width="100%" justify="space-between" align="flex-start" margin="0">
                  <NightItem inView={nightStayIsVisible} item={array[0]}/>              
                  <NightItem inView={nightStayIsVisible} item={array[1]}/>              
                </Container>
              :
                null
            }
            <Image inView={nightStayIsVisible} src="/media/stay2image.png" alt="adad" bottom='0' left="0" />
          </StyledItem>
        </Container>
    </StyledContainer>
  )
}

export default NightStayPart