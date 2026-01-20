import React from "react";

type StatelessComponentProps = {
    name: string;
};

const StatelessComponent = ({name}: StatelessComponentProps) => {

    return (
        <>
            <div>
                <h2>StatelessComponent</h2>
                <p>Hello, {name}</p>
            </div>
        </>
    )
}

export default StatelessComponent