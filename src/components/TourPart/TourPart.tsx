import styled from "styled-components"
import { dataTours } from "../../data/dataTours"
import TourItem from "./TourItem"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { useAppDispatch, useAppSelector } from "../../hook"
import { useEffect } from "react"
import { tourDataRest } from "../../dataAPI/tourRest"

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

const TourPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.tour)    

  useEffect(() => {
    dispatch(tourDataRest(dataTours))
  }, [])

  return (
    <StyledContainer>
      <NavigationItem margin="0 0 51px 0" fontSize="24px" id={id}>tury</NavigationItem>
      <TourListBlock>
        {array.map((tour, index) => 
          <TourItem index={index} tour={tour} key={tour.id}/>  
        )}
      </TourListBlock>
    </StyledContainer>
  )
}

export default TourPart