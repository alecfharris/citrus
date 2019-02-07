import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import RecipePage from '../RecipePage';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'white',
  },
});

class BrowseRecipeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleAddToList = id => {
    console.log('adding to list with id, ', id);
    // TODO: ALEC TO WRITE AXIOS CALL TO ADD RECIPE ID TO LIST
  };

  handleMakeNow = id => <Link to={`/recipe/${id}`} />;

  render() {
    const { recipe, classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            title={recipe.title}
            subheader={`You have ${
              recipe.usedIngredientCount
            }/${recipe.usedIngredientCount +
              recipe.missedIngredientCount} ingredients`}
          />
          <CardMedia
            className={classes.media}
            image={recipe.image}
            title={recipe.title}
          />
          <CardContent>
            <Typography component="p">
              {`Estimated Time: ${recipe.estimatedTime} minutes`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                this.handleMakeNow(recipe.id);
              }}
            >
              MAKE NOW
            </Button>
            <Button
              size="small"
              onClick={() => {
                this.handleAddToList(recipe.id);
              }}
            >
              ADD TO LIST
            </Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{recipe.instructions}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

BrowseRecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrowseRecipeCard);
