import styled from 'styled-components'
import { INavItemProps } from '../types/types'


const StyledNavItem = styled.p<INavItemProps>`
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0'};
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '16'};
  color: ${props => props.color || '#B1B1B1'};
  text-transform: ${props => props.textTransform || 'uppercase'};
`

export const NavigationItem = ({children, ...props}: INavItemProps) => <StyledNavItem {...props}>{children}</StyledNavItem>
