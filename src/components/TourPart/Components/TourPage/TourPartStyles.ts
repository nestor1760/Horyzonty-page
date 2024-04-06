import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    padding: 0 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    padding: 0 16px;
  }
`

export const TourListBlock = styled.div`
  width: 1110px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 375px;
  }
`