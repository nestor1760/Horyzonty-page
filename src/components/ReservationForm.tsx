import styled from "styled-components"
import { StyledButton } from "../UI/Button"
import { setShow } from "../store/modalSlice"
import { useAppDispatch } from "../hook"

const FormContainer = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 30px 30px 0 30px;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.p`
  align-self: start;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 45px;
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 40px 30px;
`

const Input = styled.input`
  min-width: 505px;
  height: 65px;
  padding: 21px 0 22px 20px;
  border: 2px solid rgba(30, 56, 43, 0.2);
  border-radius: 10px;
  color: #1E382B;
  font-size: 16px;
  font-weight: 400;
  &:last-child {
    grid-column: 1 / -1;
    grid-row: 3;
    height: 144px;
  }
`


const ReservationForm = () => {
  const dispatch = useAppDispatch()

  const closeModal = (): void => {
    dispatch(setShow({show: false, scroll: false}))
  }  

  return (
    <FormContainer>
      <Header>
        <Title>Rezerwacja wycieczki</Title>
      </Header>
      <GridContainer>
        <Input type="text" placeholder="Nazwisko"/>
        <Input type="text" placeholder="Imie"/>
        <Input type="text" placeholder="Email"/>
        <Input type="text" placeholder="Liczba dni wycieczki"/>
        <Input type="text" placeholder="Komentarz"/>
      </GridContainer>
      <StyledButton 
        margin="45px 0" 
        width="240px" 
        height="60px" 
        color="white" 
        radius="10px" 
        background="rgba(30, 56, 43)" 
        transform="none"
        size="18px"
        onClick={() => closeModal()}
      >
        Zarezerwować
      </StyledButton>
    </FormContainer>
  )
}

export default ReservationForm
