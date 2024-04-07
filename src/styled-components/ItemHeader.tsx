import styled from 'styled-components'
import { IHeaderProps } from './interfaces'
import { mobile_screen, small_tablet_screen, tablet_screen } from '../GlobalStyles'

const StyledHeader = styled.div<IHeaderProps>`
  width: ${props => props.width || '100%'};
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'space-between'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};

  @media ${tablet_screen} {
    width: 769px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    flex-direction: column;
    padding: 0 16px;
    margin: 14px 0 9px 0;
  }

  @media ${mobile_screen} {
    width: 375px;
    flex-direction: column;
    padding: 0 16px;
    margin: 14px 0 20px 0;
  }
`

export const ItemHeader = ({children, ...props}: IHeaderProps) => {
  return (<StyledHeader {...props}>{children}</StyledHeader>)
}

