import React from 'react'

function TestContext(props) {
    return (
        <>
            <h1>Test Context</h1>
            {props.children}
        </>
    )
}

export default TestContext