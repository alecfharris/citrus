import React from 'react';
import { StyledNoMatch, StyledErrorMessage } from './NotFound.styles';

function NotFound() {
  return (
    <StyledNoMatch>
      <StyledErrorMessage>404 Page Not Found</StyledErrorMessage>
    </StyledNoMatch>
  );
}

export default NotFound;
