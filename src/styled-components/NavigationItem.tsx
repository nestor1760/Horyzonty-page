import styled from 'styled-components'
import { INavItemProps } from './interfaces'
import { second_color } from '../GlobalStyles'

const StyledNavItem = styled.p<INavItemProps>`
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0'};
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '16'};
  color: ${props => props.color || `${second_color}`};
  text-transform: ${props => props.textTransform || 'uppercase'};

  @media (max-width: 768px) {
    margin: 14px 0 30px 0;
  }
`

export const NavigationItem = ({children, ...props}: INavItemProps) => <StyledNavItem {...props}>{children}</StyledNavItem>
