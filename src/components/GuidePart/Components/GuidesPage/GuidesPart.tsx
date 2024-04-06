import { Container } from "../../../../styled-components/Container"
import { ItemHeader } from "../../../../styled-components/ItemHeader"
import { NavigationItem } from "../../../../styled-components/NavigationItem"
import { StyledButton } from "../../../../UI/Button"
import { dataGuides } from "../../../../data/dataGuides"
import GuideItem from "../GuideItem/GuideItem"
import { useEffect, useState } from "react"
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { guideDataRest } from "../../../../dataAPI/guideRest"
import ReservationForm from "../../../ReservationForm/Components/ReservationForm"
import Modal from "../../../../UI/Modal"
import { setShow } from "../../../../store/modalSlice"
import { useInView } from "react-intersection-observer"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Button, SliderContainer, StyledContainer, Text, TextContainer } from "./GuidesPartStyles"
import { IGuidesPartProps } from "./interfaces"

const GuidesPart= ({ id }: IGuidesPartProps) => {
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
          ? <SliderContainer>
              <GuideItem guide={array[currentIndex]}/>
              <GuideItem guide={array[currentIndex + 1]}/>
            </SliderContainer>
          : <SliderContainer>
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
        )}
      </StyledContainer>
      <Modal show={show}>
        <ReservationForm />
      </Modal>
    </>
  )
}

export default GuidesPart