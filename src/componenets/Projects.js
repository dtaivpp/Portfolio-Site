import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import GitHubIcon32 from '../GitHub-Mark-32px.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
              {/** ToDo: Implement on hover to reveal translation */}
              プロジェクト (This Project)
          </Typography>     
          <Typography component="h5">
              See all the code that makes up this project!
          </Typography>     
        </CardContent>
        <CardActions>
          <a href="https://github.com/dtaivpp/Portfolio-Site" target='_blank'>
          <Button size="small" color="primary">
            <img src={GitHubIcon32}></img>
          </Button>
          </a>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);