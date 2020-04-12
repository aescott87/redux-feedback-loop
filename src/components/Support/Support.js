import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {
    //set state to 1 so that user can select 1 as a rating
    state = {
        feedback: {
            support: 1
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            feedback: {
                [propertyName]: event.target.value
            }
        })
    }
    //Click event that sets support state and sends info to reducer
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding support`, this.state.feedback.support);
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedback })
        //Sends user to next part of survey
        this.props.history.push('/comments');
    }

    render() {
        return(
            <div className="feedbackSupport">
                <Header />
                <br />
                <h2>How well are you being supported?</h2>
                <form onChange={(event) => this.handleChangeFor('support', event)}>
                    <label>Please select below. 1 = "Where is everyone?", 5 = "I feel supported!"</label>
                    <select name="support">
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

export default withRouter(connect()(Support));