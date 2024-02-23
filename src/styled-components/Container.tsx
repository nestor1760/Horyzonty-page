import styled from 'styled-components'
import { IContainerProps } from '../types/styled'


const StyledContainer = styled.div<IContainerProps>`
  max-width: ${props => props.width || '1440px'};
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-direction: ${props => props.direction || 'row'};
  padding: ${props => props.padding || '0px'};
  margin: ${props => props.margin || '0px'};
`



export const Container = ({children, ...props}: IContainerProps) => {
  return (<StyledContainer {...props}>{children}</StyledContainer>)
}

