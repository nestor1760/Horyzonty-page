import styled from "styled-components"
import { Container } from "../styled-components/Container"
import { GoArrowUpRight } from "react-icons/go";
import IntroImageSlider from "../UI/IntroImageSlider";

const StyledIntro = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const Title = styled.p`
  width: 826px;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 65px 0 41px 0;
`

const Text = styled.p`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  color: #2D2C2C;
  margin: 61px 0 54px 0;
  text-align: start;
`

const Button = styled.button`
  width: 255px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  background: transparent;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 3px 10px 26px -11px rgba(0,0,0,0.78);
  transition: 0.4s;
  &:hover {
    box-shadow: none;
  }
`

const CustomIcon = styled(GoArrowUpRight)`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 0 10px; 
`

const IntroPart = () => {
  return (
    <Container width="100%" margin="105px 0 0 0">
      <StyledIntro> 
        <Title>zdobywaj szczyty razem z nami</Title>
        <Container width="100%">
          <Container width="350px" height="480px" margin="0 220px 0 0" direction="column" align="flex-start">
            <Text>Najlepszym partnerem dla tych, którzy pragną zdobyć Rysy, najwyższy szczyt Polski. Komfort, bezpieczeństwo i niezapomniane emocje - to nasze główne priorytety.</Text>
            <Button>rezerwacja <CustomIcon/></Button>
          </Container>
          <Container>
            <IntroImageSlider />
          </Container>
        </Container>
      </StyledIntro>
    </Container>
  )
}

export default IntroPart