import styled from 'styled-components';

const StyledRecipeEntry = styled.div`
  background-image: linear-gradient(#0097a7, #4fbf9e, #ccff90);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (orientation: portrait) {
    height: 100vh;
    width: 100vw;
  }
  @media screen and (orientation: landscape) {
    height: 100vh;
    width: 100vw;
  }
`;

export default StyledRecipeEntry;
