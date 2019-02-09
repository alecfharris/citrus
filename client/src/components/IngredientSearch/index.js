import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = () => ({
  title: {
    fontSize: 24,
    display: "flex",
    justifyContent: "center"
  },
  card: {
    width: "90%",
    margin: 8,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 4
  }
});

class IngredientSearch extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.card}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Search Recipe by Ingredients
          </Typography>
          <Link>
            <Button size="large" variant="contained" className={classes.button}>
              Submit
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

IngredientSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientSearch);
