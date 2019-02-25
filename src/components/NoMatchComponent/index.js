import React from 'react';
import { StyledNoMatch, StyledErrorMessage } from './style.js';

function NoMatchComponent() {
  return (
    <StyledNoMatch>
      <StyledErrorMessage>404 Page Not Found</StyledErrorMessage>
    </StyledNoMatch>
  );
}

export default NoMatchComponent;
