import styled from "styled-components"
import { dataTours } from "../../data/dataTours"
import TourItem from "./TourItem"
import { NavigationItem } from "../../styled-components/NavigationItem"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const TourListBlock = styled.div`
  width: 1110px;
`

const TourPart = () => {
  return (
    <StyledContainer>
      <NavigationItem margin="0 0 51px 0" fontSize="24px">tury</NavigationItem>
      <TourListBlock>
        {dataTours.map((tour, index) => 
          <TourItem index={index} tour={tour} key={tour.id}/>  
        )}
      </TourListBlock>
    </StyledContainer>
  )
}

export default TourPart