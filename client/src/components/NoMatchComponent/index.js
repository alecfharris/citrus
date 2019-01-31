import React from "react";
import {StyledNoMatch, StyledErrorMessage} from "./style.js";

function NoMatchComponent() {
    return (
        <StyledNoMatch>
            <StyledErrorMessage />
        </StyledNoMatch>
    );
}

export default NoMatchComponent;