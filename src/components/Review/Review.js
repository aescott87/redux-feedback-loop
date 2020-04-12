import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        //Grouping all of the pieces of feedback into one object
        //to send to the server
        let allFeedback = {
          feeling: this.props.feedback.feeling,
          understanding: this.props.feedback.understanding,
          support: this.props.feedback.support,
          comments: this.props.feedback.comments,
        }
        console.log( 'Here is the full feedback', allFeedback );
        //POST request to server
        axios.post( './feedback', allFeedback )
          .then( (result) => {
            console.log( 'Feedback successfully added!' );
            //When successfully submitted, user can move to the submitted page
            this.props.history.push( '/submit' );
          })
          .catch( (error) => {
            alert( `Could not submit your feedback. Please try again` );
            console.log( 'Error adding feedback', error );
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('Going back');
        //sends user back to the previous page
        this.props.history.push('/comments');
    }

    render() {
        return(
            <div className="feedbackReview">
                <Header />
                <br />
                <h2>Review Your Feedback Below</h2>
                <h3>Feelings: {this.props.feedback.feeling}</h3>
                <h3>Understanding: {this.props.feedback.understanding}</h3>
                <h3>Support: {this.props.feedback.support}</h3>
                <h3>Comments: {this.props.feedback.comments}</h3>
                <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                <button onClick={this.handleClick}>Back</button>
            </div>
        )
    }
}
//Allows us to get props from store
const mapStateToProps = (reduxStore) => ({
    feedback: reduxStore.feedback
})

export default withRouter(connect(mapStateToProps)(Review));