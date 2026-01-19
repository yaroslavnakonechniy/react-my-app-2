import React from "react";

const StatefulComponent = ({props}) => {

    return (
        <>
            <div>
                <h2>StatefulComponent</h2>
                <p>Hello, {props}</p>
            </div>
        </>
    )
}

export default StatefulComponent