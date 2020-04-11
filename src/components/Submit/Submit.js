import React, { Component } from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Submit extends Component {

    handleSubmit = (event) => {
        console.log(this.props.store);
        this.props.dispatch({ type: 'RESET_FEEDBACK' })
        //
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="feedbackSubmit">
                <Header />
                <h1>Thank You!</h1>
                <button onClick={(event) => this.handleSubmit(event)}>Leave New Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    feedback: reduxStore.feedback
})

export default withRouter(connect(mapStateToProps)(Submit));