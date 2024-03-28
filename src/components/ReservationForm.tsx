import styled from "styled-components"
import { StyledButton } from "../UI/Button"
import { setShow } from "../store/modalSlice"
import { useAppDispatch, useAppSelector } from "../hook"
import { ChangeEvent, useState } from "react"
import { setComment, setEmail, setFirstName, setLastName, setResponce } from "../store/formSlice"
import Select from "../UI/Select"
import { setSelectValue } from "../store/selectSlice"

const FormContainer = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 30px 30px 0 30px;

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0;
    width: 500px;
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 343px;
  }
`
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0;
    width: 450px;
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 343px;
  }
`

const Title = styled.p`
  align-self: start;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 45px;

  @media (max-width: 1109px) {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;  
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 40px 30px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    dislay: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    grid-template-columns: unset;
    grid-template-rows: unset;
    gap: unset;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    dislay: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    grid-template-columns: unset;
    grid-template-rows: unset;
    gap: unset;
  }

  @media (max-width: 480px) {
    width: 343px;
    dislay: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    grid-template-columns: unset;
    grid-template-rows: unset;
    gap: unset;
  }
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
    padding-right: 20px;
    flex-wrap: wrap;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 505px;
    margin-bottom: 15px;
    &:last-child {
      width: 505px;
      height: 65px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0;
    width: 450px;
    margin-bottom: 10px;
    &:last-child {
      width: 450px;
      height: 65px;
    }
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 343px;
    margin-bottom: 10px;
    &:last-child {
      width: 343px;
      height: 65px;
    }
  }
`

const Responce = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 505px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 375px;
  }
`

const TitleResponce = styled.p`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
  
  @media (min-width: 769px) and (max-width: 1109px) {
    font-size: 26px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

const TextResponce = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const ReservationForm = () => {
  const dispatch = useAppDispatch()
  const {firstName, lastName, comment, email, responce} = useAppSelector(state => state.form)  
  const {selectValue} = useAppSelector(state => state.select)
  const [isEmailCorrect, setIsEmailCorrect] = useState<boolean | undefined>(undefined)  

  const closeModal = (): void => {
    dispatch(setShow({show: false, scroll: false}))
    setTimeout(() => {
      dispatch(setResponce(false))
    }, 300)
    dispatch(setEmail(''))
    dispatch(setFirstName(''))
    dispatch(setLastName(''))
    dispatch(setComment(''))
    dispatch(setSelectValue(''))
    setIsEmailCorrect(undefined)
  } 
  
  const reservationBtn = (): void => {
    if(firstName !== '' && lastName !== '' && email !== '' && selectValue !== "" && isEmailCorrect === true) {
      dispatch(setResponce(true))
    } else {
      alert('Wypełnij wszystkie wymagane pola')
    }
  }

   //validation input type email  
  const handleEmail = (e:ChangeEvent<HTMLInputElement>): void => {
    const newEmail = e.target.value;
    dispatch(setEmail(newEmail));

    const validateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    setIsEmailCorrect(newEmail.length > 0 ? validateEmail.test(newEmail) : undefined);
  }

  const handleName = (e:ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFirstName(e.target.value))
  }

  const handleSurname = (e:ChangeEvent<HTMLInputElement>): void => {
    dispatch(setLastName(e.target.value))
  }

  const handleComment = (e:ChangeEvent<HTMLInputElement>): void => {
    dispatch(setComment(e.target.value))
  }   

  return (
    <FormContainer>
      {(!responce)
        ?
        <>
          <Header>
            <Title>Rezerwacja wycieczki</Title>
          </Header>
          <GridContainer>
            <Input
              value={lastName} 
              onChange={handleSurname}
              type="text" 
              placeholder="Nazwisko"
              required
            />
            <Input
              value={firstName} 
              onChange={handleName}
              type="text" 
              placeholder="Imię"
              required
            />
            <Input
              value={email} 
              onChange={handleEmail}
              type="text" 
              placeholder="Email"
              required
              style={{border: isEmailCorrect === undefined ? "" : isEmailCorrect ? '' : '2px solid red'}}
            />
            <Select
              defaultValue="Wybierz ilość dni wycieczki"
              options={[
                { value: '1day', name: 'Jednodniowa wycieczka' },
                { value: '3days', name: 'Trzydniowa wycieczka' }
              ]}
            />
            <Input
              value={comment} 
              onChange={handleComment}
              type="text" 
              placeholder="Komentarz"
            />
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
            onClick={() => reservationBtn()}
          >
            Zarezerwować
          </StyledButton>
        </>
        :
         <Responce>
          <TitleResponce>Dziękujemy bardzo za rezerwację</TitleResponce>
          <TextResponce> Skontaktujemy się z Państwem w najbliższym czasie</TextResponce>
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
            Wróć na stronę
          </StyledButton>
         </Responce>
      }
    </FormContainer>
  )
}

export default ReservationForm
