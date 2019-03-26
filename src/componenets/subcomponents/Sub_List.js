import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
  root: {
    padding: '5px',
  },
  spacing: 8,
};

function SubList (props) {
  const { classes } = props;
  var generated_list = props.sublist_items.map((item, index) => 

    <ListItem key={props.key_prefix + index} classes={{root:classes.root}} alignItems="flex-start">
      <ListItemText secondaryTypographyProps={{component:'span'}} secondary={item} />
    </ListItem>
  );

  return (
    <List>
      {generated_list}
    </List>
  )
}

SubList.propTypes = {
  key_prefix: PropTypes.number.isRequired,
  sublist_items: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubList);
