import React from "react";
import { useState, ChangeEvent } from "react";

const StatefulComponent = () => {
    const [text, setText] = useState<string>("Alex2");

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <>
        <div>
            <h2>StatefulComponent</h2>
            <input type="text" value={text} onChange={handelChange} placeholder="enter your text"/>
            <p>Changed text : {text}</p>
        </div>
        </>
    )
}

export default StatefulComponent 