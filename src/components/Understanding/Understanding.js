import React, { Component } from 'react';
import Header from '../Header/Header';

class Understanding extends Component {

    state = {
        understanding: 0
    }

    render() {
        return (
            <div className="feedbackUnderstanding">
                <Header />
                <br />
                <h2>How well are you understanding the content?</h2>
                <form>
                    <label>Please select below. 1 = "Terrible", 5 = "Great!"</label>
                    <select name="understanding">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default Understanding;