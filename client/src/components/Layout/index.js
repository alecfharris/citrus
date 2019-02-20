import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../Navigation/NavBar';
import StyledLayout from './style';

const styles = () => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
  },
});

class Layout extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <StyledLayout>
        <NavBar title="Citrus" />
        <div className={classes.container}>{children}</div>
      </StyledLayout>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object,
};

export default withStyles(styles)(Layout);
