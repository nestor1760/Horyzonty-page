import { ChangeEvent, FC } from "react"
import styled from "styled-components"
import { ISelectProps } from "../types/types"
import { setSelectValue } from "../store/selectSlice"
import { useAppDispatch, useAppSelector } from "../hook"

const StyledSelect = styled.select`
  min-width: 505px;
  height: 65px;
  padding: 21px 20px 22px 20px;
  border: 2px solid rgba(30, 56, 43, 0.2);
  border-radius: 10px;
  color: #1E382B;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 505px;    
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

const StyledOption = styled.option`
  width: 505px;
  height: 65px;
  color: black;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 505px;    
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 343px;
  }
`

const Select:FC<ISelectProps> = ({options, defaultValue}) => {
  const {selectValue} = useAppSelector(state => state.select)
  const dispatch = useAppDispatch()

  const handleSelect = (e:ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setSelectValue(e.target.value))
  } 
  return (
    <StyledSelect
      value={selectValue}
      onChange={handleSelect} 
      required
    >
      <StyledOption disabled value=''>{defaultValue}</StyledOption>
      {options.map(option =>
          <StyledOption key={option.value} value={option.value}>
              {option.name}
          </StyledOption>
      )}
    </StyledSelect>
  )
}

export default Select