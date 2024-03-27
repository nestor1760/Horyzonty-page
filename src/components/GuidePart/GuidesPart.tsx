import styled, { css, keyframes } from "styled-components"
import { Container } from "../../styled-components/Container"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { StyledButton } from "../../UI/Button"
import { dataGuides } from "../../data/dataGuides"
import GuideItem from "./GuideItem"
import { useEffect, useState } from "react"
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2"
import { useAppDispatch, useAppSelector } from "../../hook"
import { guideDataRest } from "../../dataAPI/guideRest"
import ReservationForm from "../ReservationForm"
import Modal from "../../UI/Modal"
import { setShow } from "../../store/modalSlice"
import { useInView } from "react-intersection-observer"
import { useWindowWidth } from "../../hooks/useWindowWidth"


const StyledContainer = styled.div`
  width: 1110px;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
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
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 22px 0;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    font-size: 22px;
    margin-bottom: 21px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    font-size: 22px;
    margin-bottom: 21px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
    margin-bottom: 21px;
  }
`

const TextContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    margin-bottom: 30px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 343px;
    margin-bottom: 30px;
  }
`

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  margin-bottom: 25px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 13px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    flex-direction: column;
    margin-bottom: 13px;
  }

  @media (max-width: 480px) {
    width: 343px;
    flex-direction: column;
    margin-bottom: 13px;
  }
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

const GuidesPart= ({ id }: { id: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {array} = useAppSelector(state => state.guide)  
  const {show} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()
  const {ref: guidesRef, inView: guidesIsVisible} = useInView()

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  }  

  useEffect(() => {
    dispatch(guideDataRest(dataGuides))
  }, [])

  const Increment = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const Decrement = () => {
    setCurrentIndex(currentIndex - 1)
  }

  return (
    <>
      <StyledContainer ref={guidesRef}>
        <ItemHeader margin="0 0 50px 0">
          <NavigationItem width="140px" fontSize="24px" id={id}>przewodnicy</NavigationItem>
          <TextContainer>
              <Text inView={guidesIsVisible}>Przewodnicy wspólnie stworzą unikalną wycieczkę na Rysy, gdzie bezpieczeństwo, doświadczenie i wrażenia będą głównym priorytetem.</Text>
              <StyledButton onClick={() => showModal()}>rezerwacja</StyledButton>
          </TextContainer>
        </ItemHeader>
        {(array.length > 0 && windowWidth > 1109)
          ?
            <SliderContainer>
              <GuideItem guide={array[currentIndex]}/>
              <GuideItem guide={array[currentIndex + 1]}/>
            </SliderContainer>
          :
            <SliderContainer>
              {array.map(guide => 
                <GuideItem guide={guide} key={guide.id}/>
              )}
            </SliderContainer>
        }
        {(windowWidth > 1109) && (
          <Container width="100%" justify="flex-end">
            {(currentIndex <= 0)
              ? <Button><HiOutlineArrowLongLeft size={35} color="gray"/></Button>
              : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={35}/></Button>
            }
            {(currentIndex < array.length - 2)
              ? <Button onClick={Increment}><HiOutlineArrowLongRight size={35}/></Button>
              : <Button><HiOutlineArrowLongRight size={35} color="gray"/></Button>
            }
          </Container>
        )
          
        }
      </StyledContainer>
      <Modal show={show}>
        <ReservationForm />
      </Modal>
    </>
  )
}

export default GuidesPart