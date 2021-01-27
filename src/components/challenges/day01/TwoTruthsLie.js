// import React from 'react';
// <React.Fragment>
// </React.Fragment>

const ulStyle = {
    'list-style-position': 'inside',
    'text-align': 'center'
};

const TwoTruthsLie = () => {
    return (
        <>
            <h1>Bob Roudebush</h1>
            <p>I'm just a guy who likes to code.</p>
            <ul style={ulStyle}>
                <li>I was born in Chicago, IL.</li>
                <li>I run ultramarathons.</li>
                <li>I'm the '3rd'.</li>
            </ul>
        </>
    );
};

export default TwoTruthsLie;