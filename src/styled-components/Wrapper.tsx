import styled from 'styled-components'
import { IWrapperProps } from '../types/types'

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`

export const Wrapper = ({children}: IWrapperProps) => <StyledWrapper>{children}</StyledWrapper>

