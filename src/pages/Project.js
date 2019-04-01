import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Projects from '../componenets/Projects'
import ButtonAppBar from '../componenets/ButtonBar'
import logo from '../logo.svg';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


export class ProjectPage extends Component {
  render() {
    return (
      <div className={this.props.root}>
            <Grid className="App"
                  container spacing={24} 
                  alignItems="center"
                  justify="center">

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <Grid item xs={12}>
                  <Paper className={this.props.paper}> <ButtonAppBar currentPage="Projects"/></Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={this.props.paper}> <Projects /> </Paper>
                </Grid>
            </header>

              </Grid>
      </div>
    );
  }
}



export default withStyles(styles)(ProjectPage);
