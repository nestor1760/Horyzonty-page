import styled from 'styled-components'
import { IWrapperProps } from './interfaces'

const StyledWrapper = styled.div<IWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  z-index: ${props => props.zIndex || '1'};
  overflow: hidden;
`

export const Wrapper = ({children, ...props}: IWrapperProps) => <StyledWrapper {...props}>{children}</StyledWrapper>

