import styled from "styled-components"
import { Container } from "../styled-components/Container";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FC, useEffect, useState } from "react";
import { ISliderProps } from "../types/types";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const StyledSlider = styled.div`
  min-width: 539px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Image = styled.img`
  min-width: 675px;
  width: 100%;
  height: 406px;
  margin-bottom: 30px;
  object-fit: cover;
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
  margin: 
`

const IntroImageSlider: FC<ISliderProps> = ({data}) => {
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

  return (
    <Container width="100%" direction="column">
      <Image src={`${data[currentIndex].image}`} alt={data[currentIndex].title}/>
      <StyledSlider>
        <Count>{currentIndex + 1}/{data.length}</Count>
        {(currentIndex <= 0)
          ? <Button><HiOutlineArrowLongLeft size={35} color="gray"/></Button>
          : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={35}/></Button>
        }
        {(currentIndex < data.length - 1)
          ? <Button onClick={Increment}><HiOutlineArrowLongRight size={35}/></Button>
          : <Button><HiOutlineArrowLongRight size={35} color="gray"/></Button>
        }
      </StyledSlider>
    </Container>
  )
}

export default IntroImageSlider