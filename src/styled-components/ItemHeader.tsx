import styled from 'styled-components'
import { IHeaderProps } from '../types/types'


const StyledHeader = styled.div<IHeaderProps>`
  width: ${props => props.width || '100%'};
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'space-between'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
`

export const ItemHeader = ({children, ...props}: IHeaderProps) => {
  return (<StyledHeader {...props}>{children}</StyledHeader>)
}

