import styled, { css, keyframes } from "styled-components"
import { dataFood } from "../../data/dataFood"
import FoodItem from "./FoodItem"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import { useAppDispatch, useAppSelector } from "../../hook"
import { useEffect } from "react"
import { foodDataRest } from "../../dataAPI/foodRest"
import { useInView } from "react-intersection-observer"

const StyledFoodContainer = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    padding: 0 16px;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 375px;
    padding: 0 16px;
    align-items: center;
  }
`

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

const Text = styled.p<{ inView: boolean}>`
  max-width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 100%;
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`

const FoodList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const FoodPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.food)  

  const {ref: foodRef, inView: foodIsVisible} = useInView()

  useEffect(() => {
    dispatch(foodDataRest(dataFood))
  }, [])

  return (
      <StyledFoodContainer ref={foodRef}>
        <ItemHeader margin="73px 0 64px 0">
          <NavigationItem width="249px" fontSize="24px" id={id}>jedzenie</NavigationItem>
          <Text inView={foodIsVisible}>Gotowanie potraw na łonie natury to nie tylko wspaniała okazja do delektowania się lokalnymi smakami, ale również część niezapomnianego doświadczenia podczas wędrówek w Tatry.</Text>
        </ItemHeader>
        <FoodList>
          {array.map((item, index) => 
            <FoodItem index={index} food={item} key={item.id} inView={foodIsVisible}/>
          )}
        </FoodList>
      </StyledFoodContainer>
  )
}

export default FoodPart