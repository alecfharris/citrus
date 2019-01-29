import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Image from '../../static/image/cards/food.jpg';
import MaterialStyles from './style';

function RecipeCard({ title, description, imgsrc }) {
  const { card, media, button } = MaterialStyles;
  return (
    <Card className={card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          className={media}
          height="140"
          image={imgsrc}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={button} size="small">
          Share
        </Button>
        <Button className={button} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgsrc: PropTypes.string,
};

export default withStyles(MaterialStyles)(RecipeCard);
