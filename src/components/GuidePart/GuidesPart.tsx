import styled, { keyframes } from "styled-components"
import { Container } from "../../styled-components/Container"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { StyledButton } from "../../UI/Button"
import { dataGuides } from "../../data/dataGuides"
import GuideItem from "./GuideItem"

const StyledContainer = styled.div`
  width: 1110px;
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
  width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 22px 0;
  animation: ${slideLeft} 0.5s ease-in-out forwards;
`

const SliderContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: center;
  // overflow: hidden;
  justify-content: flex-start;
`

const GuidesPart = () => {
  return (
    <Container width="100%" margin="0 0 73px 0">
      <StyledContainer>
        <ItemHeader margin="0 0 50px 0">
          <NavigationItem fontSize="24px">przewodnicy</NavigationItem>
          <Container direction="column">
              <Text>Przewodnicy wspólnie stworzą unikalną wycieczkę na Rysy, gdzie bezpieczeństwo, doświadczenie i wrażenia będą głównym priorytetem.</Text>
              <StyledButton>rezerwacja</StyledButton>
          </Container>
        </ItemHeader>
        <SliderContainer>
          {dataGuides.map(guide => 
            <GuideItem guide={guide} key={guide.id}/>
          )}
        </SliderContainer>
      </StyledContainer>
    </Container>
  )
}

export default GuidesPart