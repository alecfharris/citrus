import styled from 'styled-components';

const StyledLayout = styled.div`
  background-image: linear-gradient(#0097a7, #4fbf9e, #ccff90);
  align-items: left;
  justify-content: center;

  height: 100%;

  @media screen and (orientation: portrait) {
    min-height: 100vh;
    min-width: 100vw;
  }
  @media screen and (orientation: landscape) {
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export default StyledLayout;
