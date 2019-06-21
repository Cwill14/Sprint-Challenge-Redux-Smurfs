import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import { connect } from "react-redux";
import { fetchData } from '../actions';

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

  render() {
    
    
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetchingSmurfs,
  error: state.error 
})
export default connect(mapStateToProps,{ fetchData })(App);
