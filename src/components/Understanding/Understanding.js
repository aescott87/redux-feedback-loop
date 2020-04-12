import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {
    //set state to 1 so that user can select 1 as a rating
    state = {
        feedback: {
            understanding: 1
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            feedback: {
                [propertyName]: event.target.value
            }
        })
    }
    //Click event that sets understanding state and sends info to reducer
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding understanding`, this.state.feedback.understanding);
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedback })
        //sends user to next part of survey
        this.props.history.push('/support');
    }

    render() {
        return (
            <div className="feedbackUnderstanding">
                <Header />
                <br />
                <h2>How well are you understanding the content?</h2>
                <form onChange={(event) => this.handleChangeFor('understanding', event)}>
                    <label>Please select below. 1 = "I'm lost", 5 = "I could teach this"</label>
                    <select name="understanding">
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

export default withRouter(connect()(Understanding));