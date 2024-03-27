import styled, { css, keyframes } from "styled-components";
import { Container } from "../styled-components/Container";
import IntroImageSlider from "../UI/IntroImageSlider";
import { dataIntro } from "../data/dataIntro";
import { StyledButton } from "../UI/Button";
import Modal from "../UI/Modal";
import { useAppDispatch, useAppSelector } from "../hook";
import { setTest } from "../store/modalSlice";
// import ReservationForm from "./ReservationForm";
import { useInView } from "react-intersection-observer";
import { useWindowWidth } from "../hooks/useWindowWidth";

const StyledIntro = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 105px;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    padding: 0 16px 40px 16px;
    margin-top: 56px;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    align-items: center;
    padding: 0 16px;
    margin-top: 56px;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (max-width: 480px) {
    width: 375px;
    align-items: center;
    margin-top: 56px;
    padding: 0 16px;
    border-bottom: 1px solid #B1B1B1;
  }
`
const slideDownAnimation = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
const slideRightAnimation = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Title = styled.p<{ inView: boolean}>`
  width: 826px;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 65px 0 41px 0;
  ${({ inView }) => inView && css`
    animation: ${slideDownAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    font-size: 32px;
    margin: 24px 0 30px 0;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    margin: 24px 0 30px 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    width: 100%;
    margin: 24px 0 30px 0;
  }
`

const Text = styled.p<{ inView: boolean}>`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  color: #2D2C2C;
  margin: 61px 0 54px 0;
  text-align: start;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    margin: 47px 0 64px 0;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin: 47px 0 64px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 47px 0 64px 0;
  }
`

const IntroPart = ({ id }: { id: string }) => {
  const {test} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()

  const showModal = (): void => {
    dispatch(setTest({test: true, scroll: true}))
  }  

  const {ref: introRef, inView: introIsVisible} = useInView()

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
      <Modal show={test}>
        {/* <ReservationForm /> */}
        Hello world
      </Modal>
    </>
  )
}

export default IntroPart
