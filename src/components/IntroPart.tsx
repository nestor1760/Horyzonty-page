import styled from "styled-components"
import { Container } from "../styled-components/Container"
import IntroImageSlider from "../UI/IntroImageSlider";
import { dataIntro } from "../data/dataIntro";
import {StyledButton} from "../UI/Button";

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

const IntroPart = () => {
  return (
    <Container width="100%" margin="105px 0 0 0">
      <StyledIntro> 
        <Title>zdobywaj szczyty razem z nami</Title>
        <Container width="100%">
          <Container width="350px" height="480px" margin="0 220px 0 0" direction="column" align="flex-start">
            <Text>Najlepszym partnerem dla tych, którzy pragną zdobyć Rysy, najwyższy szczyt Polski. Komfort, bezpieczeństwo i niezapomniane emocje - to nasze główne priorytety.</Text>
            <StyledButton>rezerwacja</StyledButton>
          </Container>
          <Container>
            <IntroImageSlider data={dataIntro}/>
          </Container>
        </Container>
      </StyledIntro>
    </Container>
  )
}

export default IntroPart