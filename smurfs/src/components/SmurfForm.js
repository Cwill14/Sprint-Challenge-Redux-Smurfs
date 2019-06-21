import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    addSmurf = e => {
        // e.preventDefault();
        this.props.addNewSmurf(this.state.newSmurf)
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    render() {
        return (
                <form onSubmit={this.addSmurf}>
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.newSmurf.name}
                        onChange={this.handleChanges}
                    />                    
                    <input
                        type="text"
                        placeholder="age"
                        name="age"
                        value={this.state.newSmurf.age}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        placeholder="height"
                        name="height"
                        value={this.state.newSmurf.height}
                        onChange={this.handleChanges}
                    />
                    <button>Add Smurf</button>
                </form>
        );
    }
}

// // const mapStateToProps = () => ({})
export default connect(null, { addNewSmurf })(SmurfForm);
