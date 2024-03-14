import styled from 'styled-components';
import { GoArrowUpRight } from "react-icons/go";
import { FC } from 'react';
import { IButtonProps } from '../types/types';


const Button = styled.button<IButtonProps>`
  width: ${props => props.width || '255px'};
  height: ${props => props.height || '54px'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.radius || '50px'};
  border: 1px solid rgba(0, 0, 0, 0.6);
  background: ${props => props.background || 'transparent'};
  color: ${props => props.color || 'black'};
  text-transform: ${props => props.transform || 'uppercase'};
  font-size: ${props => props.size || '16px'};
  font-weight: 600;
  cursor: pointer;
  z-index: 1;
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  box-shadow: 3px 10px 26px -11px rgba(0,0,0,0.78);
  transition: 0.4s;
  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow:inset 3px 10px 26px -11px rgba(0,0,0,0.78);
  }
`

const CustomIcon = styled(GoArrowUpRight)`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 0 10px; 
`


export const StyledButton: FC<IButtonProps> = ({children, ...props}) => <Button {...props}>{children} <CustomIcon color={props.color}/></Button>

