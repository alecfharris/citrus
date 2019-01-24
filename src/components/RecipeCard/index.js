import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../../food.jpg";
import PropTypes from "prop-types";

Typography.propTypes = {
  title: PropTypes.string,
  description: PropTypes.description
};

CardMedia.propTypes = {
  title: PropTypes.string
};

const RecipeCard = props => (
  <Card>
    <CardActionArea>
      <CardMedia image={Image} title={props.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">{props.description}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default RecipeCard;
