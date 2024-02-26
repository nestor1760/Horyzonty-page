import styled from "styled-components"
import { Container } from "../styled-components/Container"

const ImageSlider = styled.img`
  width: 100%;
  height: 406px;
  border: 1px solid black;
  object-fit: contain;
`

const IntroImageSlider = () => {
  return (
    <Container>
      <ImageSlider />
    </Container>
  )
}

export default IntroImageSlider