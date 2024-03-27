import styled from "styled-components"
import { Container } from "../styled-components/Container";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FC, useEffect, useState } from "react";
import { ISliderProps } from "../types/types";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useWindowWidth } from "../hooks/useWindowWidth";

const StyledSlider = styled.div`
  min-width: 539px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0px;
    width: 100%;
  }

  @media (max-width: 480px) {
    min-width: 0px;
    width: 100%;
  }
`

const Image = styled.img`
  min-width: 675px;
  width: 100%;
  height: 406px;
  margin-bottom: 30px;
  object-fit: cover;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 737px;
    margin-bottom: 15px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0px;
    width: 452px;
    margin-bottom: 0px;
  }

  @media (max-width: 480px) {
    min-width: 0px;
    width: 343px;
    margin-bottom: 0px;
  }
`

const Button = styled.button`
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  &:last-child {
    margin-left: 34px;
  }
`
const Count = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const IntroImageSlider: FC<ISliderProps> = ({data}) => {
  const {windowWidth} = useWindowWidth()
  const [currentIndex, setCurrentIndex] = useState<number>(0)

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

  const arrowSize = windowWidth > 769 ? 35 : 25

  return (
    <Container width="100%" direction="column">
      <Image src={`${data[currentIndex].image}`} alt={data[currentIndex].title}/>
      <StyledSlider>
        <Count>{currentIndex + 1}/{data.length}</Count>
        {(currentIndex <= 0)
          ? <Button><HiOutlineArrowLongLeft size={arrowSize} color="gray"/></Button>
          : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={arrowSize}/></Button>
        }
        {(currentIndex < data.length - 1)
          ? <Button onClick={Increment}><HiOutlineArrowLongRight size={arrowSize}/></Button>
          : <Button><HiOutlineArrowLongRight size={arrowSize} color="gray"/></Button>
        }
      </StyledSlider>
    </Container>
  )
}

export default IntroImageSlider