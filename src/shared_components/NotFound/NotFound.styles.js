import styled from 'styled-components';

const StyledNoMatch = styled.div`
  background-image: linear-gradient(#0097a7, #4fbf9e, #ccff90);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 667px;
  min-width: 375px;
`;

const StyledErrorMessage = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 72px;
`;

export { StyledNoMatch, StyledErrorMessage };
