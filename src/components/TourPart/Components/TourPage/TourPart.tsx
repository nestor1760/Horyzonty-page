import { dataTours } from "../../../../data/dataTours"
import TourItem from "../TourItem/TourItem"
import { NavigationItem } from "../../../../styled-components/NavigationItem"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { useEffect } from "react"
import { tourDataRest } from "../../../../dataAPI/tourRest"
import ReservationForm from "../../../ReservationForm/Components/ReservationForm"
import Modal from "../../../../UI/Modal/Modal"
import { useInView } from "react-intersection-observer"
import { StyledContainer, TourListBlock } from "./TourPartStyles"
import { ITourPartProps } from "./interfaces"

const TourPart = ({ id }: ITourPartProps) => {
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