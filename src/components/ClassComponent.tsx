import React, { Component, ChangeEvent  } from "react";

type ClassComponentState = {
    text: string;
}

class ClassComponent extends Component <{}, ClassComponentState> {
    state : ClassComponentState = {
        text : "Alex3",
    };

    handelChange = (e: ChangeEvent <HTMLInputElement>) => {
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