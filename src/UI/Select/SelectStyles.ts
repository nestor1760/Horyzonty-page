import styled from "styled-components"
import { black_color, fourth_color, mobile_screen, small_tablet_screen, tablet_screen } from "../../GlobalStyles"

export const StyledSelect = styled.select`
  min-width: 505px;
  height: 65px;
  padding: 21px 20px 22px 20px;
  border: 2px solid rgba(30, 56, 43, 0.2);
  border-radius: 10px;
  color: ${fourth_color};
  font-size: 16px;
  font-weight: 400;

  @media ${tablet_screen} {
    min-width: 0;
    width: 505px;    
  }

  @media ${small_tablet_screen} {
    min-width: 0;
    width: 450px;
  }

  @media ${mobile_screen} {
    min-width: 0;
    width: 343px;
  }
`

export const StyledOption = styled.option`
  width: 505px;
  height: 65px;
  color: ${black_color};

  @media ${tablet_screen} {
    width: 505px;    
  }

  @media ${small_tablet_screen} {
    width: 450px;
  }

  @media ${mobile_screen} {
    width: 343px;
  }
`