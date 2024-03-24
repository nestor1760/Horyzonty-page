import styled from "styled-components"
import { dataTours } from "../../data/dataTours"
import TourItem from "./TourItem"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { useAppDispatch, useAppSelector } from "../../hook"
import { useEffect } from "react"
import { tourDataRest } from "../../dataAPI/tourRest"
import ReservationForm from "../ReservationForm"
import Modal from "../../UI/Modal"
import { useInView } from "react-intersection-observer"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    padding: 0 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    padding: 0 16px;
  }
`

const TourListBlock = styled.div`
  width: 1110px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 375px;
  }
`

const TourPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.tour)  
  const {show} = useAppSelector(state => state.modal)
  
  const {ref: tourRef, inView: tourIsVisible} = useInView()

  useEffect(() => {
    dispatch(tourDataRest(dataTours))
  }, [])

  return (
    <>
      <StyledContainer ref={tourRef}>
        <NavigationItem margin="0 0 51px 0" fontSize="24px" id={id}>tury</NavigationItem>
        <TourListBlock>
          {array.map((tour, index) => 
            <TourItem index={index} tour={tour} key={tour.id} inView={tourIsVisible}/>  
          )}
        </TourListBlock>
      </StyledContainer>
      <Modal show={show}>
        <ReservationForm />
      </Modal>
    </>
  )
}

export default TourPart