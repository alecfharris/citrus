import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import StyledLoading from './Loading.styles';

const loadingStyle = {
  color: 'white',
};

function Loading() {
  return <h1 style={loadingStyle}>Loading...</h1>;
}

export default withStyles(StyledLoading)(Loading);
