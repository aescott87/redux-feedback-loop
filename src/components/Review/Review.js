import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClick = (event) => {
        event.preventDefault();
        let allFeedback = {
          feelingRating: this.props.feedback.feeling,
          understandingRating: this.props.feedback.understanding,
          supportRating: this.props.feedback.support,
          commentsAdded: this.props.feedback.comments,
        }
        console.log( 'Here is the full feedback', allFeedback );
        axios.post( './feedback', allFeedback )
          .then( (result) => {
            console.log( 'Feedback successfully added!' );
            this.props.history.push( '/submit' );
          })
          .catch( (error) => {
            alert( `Could not submit your feedback. Please try again` );
            console.log( 'Error adding feedback', error );
        })
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
                <button onClick={(event) => this.handleClick(event)}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    feedback: reduxStore.feedback
})

export default withRouter(connect(mapStateToProps)(Review));