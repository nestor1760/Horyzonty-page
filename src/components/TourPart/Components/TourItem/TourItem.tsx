import { FC } from "react"
import { StyledButton } from "../../../../UI/Button/Button"
import { useEvenItem } from "../../../../hooks/useEvenItem"
import { useAppDispatch } from "../../../../hook"
import { setShow } from "../../../../store/modalSlice"
import { Description, Image, InfoPart, InfoPartItem, Span, StyledItemBlock, Title } from "./TourItemStyles"
import { ITourItemProps } from "./interfaces"

const TourItem:FC<ITourItemProps> = ({tour, index, inView}) => {
  const dispatch = useAppDispatch()
  const {description, distance, duration, image, people, title} = tour;
  const isEven = useEvenItem(index)  

  const day = duration > 1 ? 'dni' : 'dzień';
  const person = people > 1 ? 'osób' : 'osoba';

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  } 
  
  return (
      <StyledItemBlock element={isEven} inView={inView}>
        <InfoPart>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <InfoPartItem>Odległość<Span>{distance} km</Span></InfoPartItem>
          <InfoPartItem>Czas trwania<Span>{duration} {day}</Span></InfoPartItem>
          <InfoPartItem>Ilość osób<Span>{people} {person}</Span></InfoPartItem>
          <StyledButton onClick={() => showModal()} margin="44px 0 0 0">Rezerwacja</StyledButton>
        </InfoPart>
        <Image element={isEven} src={image} alt={title}/>
      </StyledItemBlock>
  )
}

export default TourItem