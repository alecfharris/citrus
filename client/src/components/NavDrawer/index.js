import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Kitchen from "@material-ui/icons/Kitchen";
import Bookmarks from "@material-ui/icons/Bookmarks";
import MenuIcon from "@material-ui/icons/Menu";
import ViewAgenda from "@material-ui/icons/ViewAgenda";
import Input from "@material-ui/icons/Input";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class NavDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link style={{ textDecoration: "none" }} to="fridge">
            <ListItem button key="My Fridge">
              <ListItemIcon>
                <Kitchen />
              </ListItemIcon>
              <ListItemText primary="My Fridge" />
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="#">
            <ListItem button key="My Recipes">
              <ListItemIcon>
                <Bookmarks />
              </ListItemIcon>
              <ListItemText primary="My Recipes" />
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="browse">
            <ListItem button key="Browse Recipes">
              <ListItemIcon>
                <ViewAgenda />
              </ListItemIcon>
              <ListItemText primary="Browse Recipes" />
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="enterrecipe">
            <ListItem button key="Add Recipes">
              <ListItemIcon>
                <Input />
              </ListItemIcon>
              <ListItemText primary="Add Recipe" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer("left", true)} />
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavDrawer);