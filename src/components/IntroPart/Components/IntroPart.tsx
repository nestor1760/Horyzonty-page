import { Container } from "../../../styled-components/Container";
import IntroImageSlider from "../../../UI/IntroImageSlider";
import { dataIntro } from "../../../data/dataIntro";
import { StyledButton } from "../../../UI/Button";
import Modal from "../../../UI/Modal";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { setShow } from "../../../store/modalSlice";
import ReservationForm from "../../ReservationForm/Components/ReservationForm";
import { useInView } from "react-intersection-observer";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { StyledIntro, Text, Title } from "./IntroPartStyles";
import { IIntroProps } from "./interfaces";

const IntroPart = ({ id }: IIntroProps) => {
  const {show} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()
  const {ref: introRef, inView: introIsVisible} = useInView()

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  }  

  return (
    <>
      <StyledIntro id={id} ref={introRef}> 
        <Title inView={introIsVisible}>zdobywaj szczyty razem z nami</Title>
        <Container 
          width="100%" 
          direction={windowWidth > 1109 ? '' : 'column-reverse'} 
          margin={windowWidth > 769 ? "0" : '0 0 67px 0'}
          align={windowWidth > 1109 ? "" : 'center'}
        >
          <Container 
            width="350px" 
            height={windowWidth > 1109 ? "480px" : '100%'} 
            margin={windowWidth > 1109 ? "0 220px 0 0" : '0'} 
            direction="column" 
          >
            <Text inView={introIsVisible}>Najlepszym partnerem dla tych, którzy pragną zdobyć Rysy, najwyższy szczyt Polski. Komfort, bezpieczeństwo i niezapomniane emocje - to nasze główne priorytety.</Text>
            <StyledButton onClick={() => showModal()}>rezerwacja</StyledButton>
          </Container>
          <Container>
            <IntroImageSlider data={dataIntro}/>
          </Container>
        </Container>
      </StyledIntro>
      <Modal show={show}>
        <ReservationForm />
      </Modal>
    </>
  )
}

export default IntroPart
