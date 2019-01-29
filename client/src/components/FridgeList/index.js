import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import FridgeInfo from "../FridgeInfo";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: "#FFF"
  }
});

function FridgeList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <FridgeInfo title="Apples" description="2 Remaining" />
      <FridgeInfo title="Butter" description="1/4 Pound Remaining" />
    </List>
  );
}

FridgeList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FridgeList);
