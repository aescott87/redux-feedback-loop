import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    //set state for comments to an empty string.
    //This is in case the user does not want to enter comments
    state = {
        feedback: {
            comments: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            feedback: {
                [propertyName]: event.target.value
            }
        })
    }
    //Click event that sets comments state and sends info to reducer
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding comments`, this.state.feedback.comments);
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedback })
        //Sends user to the review page
        this.props.history.push('/review');
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('Going back');
        //sends user back to the previous page
        this.props.history.push('/support');
    }

    render() {
        return(
            <div className="feedbackComment">
                <Header />
                <br />
                <h2>Any comments you want to leave?</h2>
                <form>
                    <label>Comments</label>
                    <input type="text" onChange={(event) => this.handleChangeFor('comments', event)}/>
                    <button type="submit" onClick={this.handleSubmit}>Next</button>
                    <button onClick={this.handleClick}>Back</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect()(Comments));