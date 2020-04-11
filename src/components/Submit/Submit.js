import React, { Component } from 'react';
import Header from '../Header/Header';

class Submit extends Component {
    render() {
        return (
            <div className="feedbackSubmit">
                <Header />
                <h1>Thank You!</h1>
                <button>Leave New Feedback</button>
            </div>
        )
    }
}

export default Submit;