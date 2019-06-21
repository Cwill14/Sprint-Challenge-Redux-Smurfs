import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import { connect } from "react-redux";
import { fetchData, deleteSmurf } from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount() {
    this.props.fetchData()
  }

  deleteSmurf = id => {
    this.props.deleteSmurf()
  }
  
  render() {
    if (this.props.fetching && this.props.addingSmurf) {
      return (
        <h2 className="App">loading...</h2>
      )
    }
    if (this.props.error !== null) {
      return (
        <div className="App">
          <h1>Uh Oh Spaghetti-O!!!</h1>
          <h2>You have an error code!</h2>
          <h3>{this.props.error}</h3>
        </div>
      )
    }
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetchingSmurfs,
  error: state.error, 
  addingSmurf: state.addingSmurf
})
export default connect(mapStateToProps,{ fetchData, deleteSmurf })(App);
