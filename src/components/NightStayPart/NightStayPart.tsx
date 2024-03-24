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
import { TImage } from "../../types/types"
import { useWindowWidth } from "../../hooks/useWindowWidth"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 126px 0;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    margin: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    align-items: center;
    width: 500px;
    padding: 0 16px;
    margin: 0;
  }

  @media (max-width: 480px) {
    align-items: center;
    width: 375px;
    padding: 0 16px;
    margin: 0;
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

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
  }
`

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

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 100%;
    min-width: 705px;
  }

  @media (min-width: 481px) and (max-width: 768px) { 
    min-width: 481px;
    left: 0;
  }

  @media (max-width: 480px) {
    min-width: 375px;
    left: -17px;
  }
`

const ItemContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px 0 0 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px 0 0 0;
  }

  @media (max-width: 480px) {
    width: 343px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px 0 0 0;
  }
`

const StyledItem = styled.div`
  width: 50%;
  height: 734px;
  display: flex;
  align-item: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  &.reverseItem {
    flex-direction: column-reverse;
  }
  &:first-child {
    justify-content: flex-end;
    margin-right: 30px;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    &:first-child {
      justify-content: flex-end;
      margin-right: 0;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    height: 780px;
    padding: 0 16px;
    &:first-child {
      justify-content: flex-end;
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 780px;
    &:first-child {
      justify-content: flex-end;
      margin-right: 0;
    }
  }
  
`

const Title = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 35px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 343px;
    margin-bottom: 20px;
    font-size: 20px;
  }
`

const NightStayPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()

  const {array} = useAppSelector(state => state.night)  

  const {ref: nightStayRef, inView: nightStayIsVisible} = useInView()

  useEffect(() => {
    dispatch(nightStayDataRest(dataNightStay))
  }, [])

  return (
    <StyledContainer ref={nightStayRef}>
      <ItemHeader margin={windowWidth > 1109 ? "100px 0 157px 0" : '46px 0 30px 0'}>
        <NavigationItem width="411px" fontSize="24px" id={id}>nocleg pod gołym niebem</NavigationItem>
        <Text inView={nightStayIsVisible}>Wyruszając na trzydniową wycieczkę na Rysy, nocowanie w namiotach stanowi niezapomniany element zbliżenia się do natury i poczucia prawdziwej przygody.</Text>
      </ItemHeader>
        <ItemContainer>
          <StyledItem>
            <Image 
              inView={nightStayIsVisible} 
              src="/media/stay1image.png" 
              alt="girl and river" 
              top='0' 
              right={windowWidth > 1109 ? '0' : ''} 
            />
            {(array.length > 0)
              ?
                <Container 
                  width="100%" 
                  justify={windowWidth > 769 ? 'space-between' : "flex-start"} 
                  align="flex-start" 
                  margin="0 0 60px 0" 
                  direction={windowWidth > 1109 ? '' : "column"}
                >
                  <NightItem inView={nightStayIsVisible} item={array[2]}/>              
                  <NightItem inView={nightStayIsVisible} item={array[3]}/>              
                </Container>
              :
                null
            }
          </StyledItem>
          <StyledItem className={windowWidth > 1109 ? '' : 'reverseItem'}>
            {(array.length > 0)
              ?
                <>
                  <Container 
                    width="100%" 
                    justify={windowWidth > 769 ? 'space-between' : "flex-start"} 
                    align="flex-start" 
                    margin="0" 
                    direction="column"
                  >
                    <Title inView={nightStayIsVisible}>Podczas noclegu w namiotach otrzymasz:</Title>
                    <NightItem inView={nightStayIsVisible} item={array[0]}/>              
                    <NightItem inView={nightStayIsVisible} item={array[1]}/>              
                  </Container>
                </>
              :
                null
            }
            <Image 
              inView={nightStayIsVisible} 
              src="/media/stay2image.png" 
              alt="tent" 
              bottom={windowWidth > 1109 ? '0' : ''} 
              left={windowWidth > 1109 ? '0' : ''} 
              top={windowWidth > 1109 ? '' : '0'} 
            />
          </StyledItem>
        </ItemContainer>
    </StyledContainer>
  )
}

export default NightStayPart