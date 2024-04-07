import { keyframes } from "styled-components"

//animation
export const slideRightAnimation = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const slideLeftAnimation = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const slideUp = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const openGuideInfo = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
}
`

export const closeGuideInfo = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`

//variables media
export const mobile_screen = '(max-width: 480px)';
export const small_tablet_screen = '(min-width: 481px) and (max-width: 768px)';
export const tablet_screen = '(min-width: 769px) and (max-width: 1109px)'

//variables colors
export const first_color = '#5A5A5A';
export const second_color = '#B1B1B1';
export const third_color = '#2D2C2C';
export const fourth_color = '#1E382B';
export const black_color = '#000000';
export const white_color = '#ffffff';
export const gray_color = '#808080';