import { Container } from "../../styled-components/Container";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FC, useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { ISliderProps } from "./interfaces";
import { Button, Count, Image, StyledSlider } from "./IntroImageSliderStyles";
import { gray_color } from "../../GlobalStyles";

const IntroImageSlider: FC<ISliderProps> = ({data}) => {
  const {windowWidth} = useWindowWidth()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const arrowSize = windowWidth > 769 ? 35 : 25

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  const Increment = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const Decrement = () => {
    setCurrentIndex(currentIndex - 1)
  }

  return (
    <Container width="100%" direction="column">
      <Image src={`${data[currentIndex].image}`} alt={data[currentIndex].title}/>
      <StyledSlider>
        <Count>{currentIndex + 1}/{data.length}</Count>
        {(currentIndex <= 0)
          ? <Button><HiOutlineArrowLongLeft size={arrowSize} color={gray_color}/></Button>
          : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={arrowSize}/></Button>
        }
        {(currentIndex < data.length - 1)
          ? <Button onClick={Increment}><HiOutlineArrowLongRight size={arrowSize}/></Button>
          : <Button><HiOutlineArrowLongRight size={arrowSize} color={gray_color}/></Button>
        }
      </StyledSlider>
    </Container>
  )
}

export default IntroImageSlider