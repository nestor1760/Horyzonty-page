import styled, { keyframes } from "styled-components"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { dataGallery } from "../../data/dataGallery"
import GalleryItem from "./GalleryItem"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 63px 0 46px 0;
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
  width: 100%;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
  animation: ${slideLeft} 0.5s ease-in-out forwards;
`
const GridContainer = styled.div`
  position: relative;
  width: 1110px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 28px;
  align-items: end;
`

const GalleryPart = () => {
  return (
    <StyledContainer>
      <ItemHeader margin="64px 0 80px 0">
        <NavigationItem fontSize="24px">galeria podróży</NavigationItem>
        <Text>Galeria podróży firmy Horyzonty - wiodącego touroperatora specjalizującego się w organizacji wycieczek na najwyższy szczyt Polski, górę Rysy!</Text>
      </ItemHeader>
      <GridContainer>
        {dataGallery.map((item, index) => 
          <GalleryItem index={index} item={item} key={item.id}/>
        )}
      </GridContainer>
    </StyledContainer>
  )
}

export default GalleryPart