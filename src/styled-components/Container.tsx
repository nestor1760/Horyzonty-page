import styled from 'styled-components'
import { IContainerProps } from '../types/types'


const StyledContainer = styled.div<IContainerProps>`
  max-width: ${props => props.width || '1440px'};
  height: ${props => props.height || 'auto'};
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-direction: ${props => props.direction || 'row'};
  padding: ${props => props.padding || 'auto'};
  margin: ${props => props.margin || 'auto'};
  flex-wrap: ${props => props.wrap || 'no-wrap'};
  background: ${props => props.background || 'transparent'};
`



export const Container = ({children, ...props}: IContainerProps) => {
  return (<StyledContainer {...props}>{children}</StyledContainer>)
}

