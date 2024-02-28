import styled from 'styled-components';
import { GoArrowUpRight } from "react-icons/go";
import { FC } from 'react';
import { IButtonProps } from '../types/types';


const Button = styled.button`
  width: 255px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  background: transparent;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 3px 10px 26px -11px rgba(0,0,0,0.78);
  transition: 0.4s;
  &:hover {
    box-shadow: none;
  }
`

const CustomIcon = styled(GoArrowUpRight)`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 0 10px; 
`


export const StyledButton: FC<IButtonProps> = ({children}) => <Button>{children} <CustomIcon/></Button>

