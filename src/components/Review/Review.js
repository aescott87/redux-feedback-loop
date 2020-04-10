import React, { Component } from 'react';
import Header from '../Header/Header';

class Review extends Component {
    render() {
        return(
            <div className="feedbackReview">
                <Header />
                <br />
                <h2>Review Your Feedback Below</h2>
                <h3>Feelings: {/*Feelings state goes here*/}</h3>
                <h3>Understanding: {/*Understanding state goes here*/}</h3>
                <h3>Support: {/*Support state goes here*/}</h3>
                <h3>Comments: {/*Comments state goes here*/}</h3>
                <button>Submit</button>
            </div>
        )
    }
}

export default Review;