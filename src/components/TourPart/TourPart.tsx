import styled from "styled-components"
import { dataTours } from "../../data/dataTours"
import TourItem from "./TourItem"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const NavigationItem = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  color: #B1B1B1;
  text-transform: uppercase;
  margin-bottom: 51px;
`

const TourListBlock = styled.div`
  width: 1110px;
`


const TourPart = () => {
  return (
    <StyledContainer>
      <NavigationItem>tury</NavigationItem>
      <TourListBlock>
        {dataTours.map((tour, index) => 
          <TourItem index={index} tour={tour} key={tour.id}/>  
        )}
      </TourListBlock>
    </StyledContainer>
  )
}

export default TourPart