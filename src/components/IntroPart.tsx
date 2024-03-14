import styled, { keyframes } from "styled-components";
import { Container } from "../styled-components/Container";
import IntroImageSlider from "../UI/IntroImageSlider";
import { dataIntro } from "../data/dataIntro";
import { StyledButton } from "../UI/Button";
import Modal from "../UI/Modal";
import { useAppDispatch } from "../hook";
import { setShow } from "../store/modalSlice";
import ReservationForm from "./ReservationForm";

const StyledIntro = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
const slideDown = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
const slideRight = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Title = styled.p`
  width: 826px;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 65px 0 41px 0;
  animation: ${slideDown} 0.5s ease-in-out forwards;
`

const Text = styled.p`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  color: #2D2C2C;
  margin: 61px 0 54px 0;
  text-align: start;
  animation: ${slideRight} 0.5s ease-in-out forwards;
`

const IntroPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  }  

  return (
    <Container width="100%" margin="105px 0 0 0">
      <StyledIntro id={id}> 
        <Title>zdobywaj szczyty razem z nami</Title>
        <Container width="100%">
          <Container width="350px" height="480px" margin="0 220px 0 0" direction="column" align="flex-start">
            <Text>Najlepszym partnerem dla tych, którzy pragną zdobyć Rysy, najwyższy szczyt Polski. Komfort, bezpieczeństwo i niezapomniane emocje - to nasze główne priorytety.</Text>
            <StyledButton onClick={() => showModal()}>rezerwacja</StyledButton>
          </Container>
          <Container>
            <IntroImageSlider data={dataIntro}/>
          </Container>
        </Container>
      </StyledIntro>
      <Modal>
        <ReservationForm />
      </Modal>
    </Container>
  )
}

export default IntroPart