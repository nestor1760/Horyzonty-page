import styled from 'styled-components'
import { IWrapperProps } from '../types/styled'

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const Wrapper = ({children}: IWrapperProps) => <StyledWrapper>{children}</StyledWrapper>

