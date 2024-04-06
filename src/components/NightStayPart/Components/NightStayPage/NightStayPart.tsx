import { ItemHeader } from "../../../../styled-components/ItemHeader"
import { NavigationItem } from "../../../../styled-components/NavigationItem"
import { Container } from "../../../../styled-components/Container"
import { dataNightStay } from "../../../../data/dataNightStay"
import NightItem from "../NightItem/NightItem"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { useEffect } from "react"
import { nightStayDataRest } from "../../../../dataAPI/nightStayRest"
import { useInView } from "react-intersection-observer"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Image, ItemContainer, StyledContainer, StyledItem, Text, Title } from "./NightStayPartStyles"
import { INightStayPartProps } from "./interfaces"

const NightStayPart = ({ id }: INightStayPartProps) => {
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
            {(array.length > 0) && (
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
            )}
          </StyledItem>
          <StyledItem className={windowWidth > 1109 ? '' : 'reverseItem'}>
            {(array.length > 0) && (
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
            )}
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