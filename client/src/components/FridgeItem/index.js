import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

function FridgeItem({ title, description }) {
  return (
    <ListItem>
      <Avatar />
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
}

ListItemText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default FridgeItem;
