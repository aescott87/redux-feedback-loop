import React, { Component } from 'react';
import Header from '../Header/Header';

class Support extends Component {

    state = {
        support: 0
    }
    
    render() {
        return(
            <div className="feedbackSupport">
                <Header />
                <br />
                <h2>How well are you being supported?</h2>
                <form>
                    <label>Please select below. 1 = "Terrible", 5 = "Great!"</label>
                    <select name="support">
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

export default Support;