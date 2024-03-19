import styled, { css, keyframes } from "styled-components"
import { FC } from "react"
import { ITourItemProps } from "../../types/types"
import { StyledButton } from "../../UI/Button"
import { useEvenItem } from "../../hooks/useEvenItem"
import { Container } from "../../styled-components/Container"
import { useAppDispatch } from "../../hook"
import { setShow } from "../../store/modalSlice"

const StyledItemBlock = styled.div<{ element: boolean | undefined, inView: boolean}>`
  width: 100%:
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ element }) => element ? 'row' : 'row-reverse'};
  ${({ inView, element }) => inView && css`
    animation: ${(element ? slideLeftAnimation : slideRightAnimation)} 0.5s ease-in-out forwards;
  `};
  margin-bottom: 80px;
  &:last-child {
    margin-top: 56px;
  }
  &.bigger {
    flex-direction: row;
  };
`
const slideLeftAnimation = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRightAnimation = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const InfoPart = styled.div`
  width: 445px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: black;
  text-decoration: uppercase;
  margin-bottom: 19px;
`
const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid #B1B1B1;
  padding: 15px 0;
`
const InfoPartItem = styled.p`
  width: 445px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #B1B1B1;
  font-size: 18px
  font-weight: 400;
  color: #B1B1B1;
`

const Span = styled.span`
  color: black;
`

const Image = styled.img<{ element: boolean | undefined}>`
  width: 800px;
  height: 530px;
  object-fit: cover;
  margin: ${({ element }) => element ? '0 0 0 30px' : '0 30px 0 0'};;
`


const TourItem:FC<ITourItemProps> = ({tour, index, inView}) => {
  const {description, distance, duration, image, people, title} = tour;
  const dispatch = useAppDispatch()

  const showModal = (): void => {
    dispatch(setShow({show: true, scroll: true}))
  } 
  
  const day = duration > 1 ? 'dni' : 'dzień';
  const person = people > 1 ? 'osób' : 'osoba';
  
  const isEven = useEvenItem(index)  
  
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
        <Container>
          <Image element={isEven} src={image} alt={title}/>
        </Container>
      </StyledItemBlock>
  )
}

export default TourItem