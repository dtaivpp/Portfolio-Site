import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExperienceItemList from './subcomponents/Experience_Item_List'

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
            経験 (Experience)
        </Typography>          
          <ExperienceItemList experience_items={[
            {
              title: "Operations Software Developer - Regent University",
              from_range: "February 2019 - Present",
              sublist_items:[
                "- Initiated CRM development projects for improving agent efficiency",
                "- Create Dynamics CRM Worflows using C#",
                "- Customized buisness logic implemented using Javascript and OData Queries",
                "- Adds features to Angular application to support new requirements",
              ]
            },
            {
              title:"Analyst and Developer - Regent University",
              from_range: "November 2015 - February 2019",
              sublist_items:[
                "- Automated data processes using python increasing department throughput 4x",
                "- Identified and reported on the success of key KPI's using Power BI and SQL",
                "- Managed the aquisition, deployment, and training of a new telephony solution",
              ]
            },
            {
              title:"Technical Product Development Intern - Silver Spring Networks",
              from_range: "May 2014 - August 2014",
              sublist_items:[
                "Text 1",
                "Text 2",
                "Text 3",
              ]
            }
          ]} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);