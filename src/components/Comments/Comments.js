import React, { Component } from 'react';
import Header from '../Header/Header';

class Comments extends Component {

    render() {
        return(
            <div className="feedbackComment">
                <Header />
                <br />
                <h2>Any comments you want to leave?</h2>
                <form>
                    <label>Comments</label>
                    <input type="text" value={this.state.comments}/>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default Comments;