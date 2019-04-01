import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class PagesMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          className={this.props.classes.menuButton}
          aria-owns={anchorEl ? 'pages-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />

        </IconButton>
        <Menu
          id="pages-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem component={Link} to='/' onClick={this.handleClose}>About Me</MenuItem>
          <MenuItem component={Link} to='/resume' onClick={this.handleClose}>Resume</MenuItem>
          <MenuItem component={Link} to='/projects' onClick={this.handleClose}>Projects</MenuItem>
        </Menu>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white',
  },
};

export default withStyles(styles)(PagesMenu);