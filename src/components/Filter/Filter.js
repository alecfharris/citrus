import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { styles, withStyles, Typography } from './Filter.styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0097A7' },
  },
});

const selected = [];

const options = [
  'Vegetarian',
  'Vegan',
  'Gluten Free',
  'Dairy Free',
  'Healthy',
  'Popular',
  'Sustainable',
  'Low FODMAP',
  'Ketogenic',
  'Whole 30',
];

class Filter extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = item => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(item);
    if (currentIndex === -1) {
      selected.push(item);
      console.log(selected);
    } else {
      selected.splice(currentIndex, 1);
      console.log(selected);
    }

    this.setState({
      checked: selected,
    });
  };

  handleDelete = item => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(item);

    selected.splice(currentIndex);

    this.setState({
      checked: selected,
    });

    this.handleToggle();
  };

  render() {
    const { classes } = this.props;
    const { root, card, title, div } = classes;
    return (
      <div className={root}>
        <div className={card}>
          <Typography className={title} color="textSecondary" gutterBottom>
            Dietary Restrictions
          </Typography>
          <div className={div}>
            <MuiThemeProvider theme={theme}>
              {options.map(item => (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleToggle(item)}
                      key={item.name}
                      color="primary"
                    />
                  }
                  label={item}
                />
              ))}
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);
