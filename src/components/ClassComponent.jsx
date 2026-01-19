import React, { Component } from "react";

class ClassComponent extends Component {
    state = {
        text : "Alex3",
    };

    handelChange = (e) => {
        this.setState({text: e.target.value});
    } 

    render (){
        return (
            <>
            <div>
                <h2>ClassConponent</h2>
                <input type="text" value={this.state.text} onChange={this.handelChange} />
                <p>Changed text:{this.state.text}</p>
            </div>
            </>
        )
    }
}

export default ClassComponent