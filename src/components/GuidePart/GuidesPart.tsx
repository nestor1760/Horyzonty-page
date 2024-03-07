import styled, { keyframes } from "styled-components"
import { Container } from "../../styled-components/Container"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { StyledButton } from "../../UI/Button"
import { dataGuides } from "../../data/dataGuides"
import GuideItem from "./GuideItem"
import { FC, useState } from "react"
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2"


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
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  margin-bottom: 25px;
`

const Button = styled.button`
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-left: 34px;
  }
`

const GuidesPart:FC= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Increment = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const Decrement = () => {
    setCurrentIndex(currentIndex - 1)
  }

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
            <GuideItem guide={dataGuides[currentIndex]}/>
            <GuideItem guide={dataGuides[currentIndex + 1]}/>
        </SliderContainer>
        <Container width="100%" justify="flex-end">
          {(currentIndex <= 0)
            ? <Button><HiOutlineArrowLongLeft size={35} color="gray"/></Button>
            : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={35}/></Button>
          }
          {(currentIndex < dataGuides.length - 2)
            ? <Button onClick={Increment}><HiOutlineArrowLongRight size={35}/></Button>
            : <Button><HiOutlineArrowLongRight size={35} color="gray"/></Button>
          }
        </Container>
      </StyledContainer>
    </Container>
  )
}

export default GuidesPart