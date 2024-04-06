import { dataFood } from "../../../../data/dataFood"
import FoodItem from "../FoodItem/FoodItem"
import { ItemHeader } from "../../../../styled-components/ItemHeader"
import { NavigationItem } from "../../../../styled-components/NavigationItem"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { useEffect } from "react"
import { foodDataRest } from "../../../../dataAPI/foodRest"
import { useInView } from "react-intersection-observer"
import { FoodList, StyledFoodContainer, Text } from "./FoodPageStyles"
import { IFoodPartProps } from "./interfaces"

const FoodPart = ({ id }: IFoodPartProps) => {
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