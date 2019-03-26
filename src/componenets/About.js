import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 600,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          私 (Me)
        </Typography>

          <Typography component="span">
            Developer by day, and Designer, Dad, Landman, Tinkerer, Drone Pilot, Nomad, Etc by night.
            I am not one who sees limits but limitless opportunities. To do this I am not afraid 
            to try and fail until I catch something that sticks. This is the mentality I have taken 
            with me to every job and is why the position I leave is never the same as the one I started.   
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);