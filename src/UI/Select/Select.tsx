import { ChangeEvent, FC } from "react"
import { setSelectValue } from "../../store/selectSlice"
import { useAppDispatch, useAppSelector } from "../../hook"
import { StyledOption, StyledSelect } from "./SelectStyles"
import { ISelectProps } from "./interfaces"

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