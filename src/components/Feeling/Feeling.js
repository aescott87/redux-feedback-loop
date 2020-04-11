import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feedback: {
            feeling: 1
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            feedback: {
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding feeling`, this.state.feedback.feeling);
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedback })
        //
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div className="feedbackFeeling">
                <Header />
                <br />
                <h2>How are you feeling today?</h2>
                <form onChange={(event) => this.handleChangeFor('feeling', event)}>
                    <label>Please select below. 1 = "Terrible", 5 = "Great!"</label>
                    <select name="feeling">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit" onClick={this.handleSubmit}>Next</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect()(Feeling));