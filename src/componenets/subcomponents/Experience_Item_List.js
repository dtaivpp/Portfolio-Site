import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import SubList from './Sub_List'

const styles = theme => ({
  smalltext:{
    fontSize: 13,
  },
})

function ExperienceItemList (props){
  const { classes } = props;
  var generated_list = props.experience_items.map((item, index) => 

    <ListItem alignItems="flex-start" key={index}>
      <ListItemText secondaryTypographyProps={{component:'span'}}
        primary={item.title}
        secondary={
          <span>
            <span className={classes.smalltext}> {item.from_range}</span>
            <SubList sublist_items={item.sublist_items} key_prefix={index*100} />
          </span>
        }
      />
    </ListItem>
  );
  return (
    <List>
      {generated_list}
    </List>
  )
}

ExperienceItemList.propTypes = {
  experience_items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    from_range: PropTypes.string.isRequired,
    sublist_items: PropTypes.array.isRequired,
  })).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceItemList);