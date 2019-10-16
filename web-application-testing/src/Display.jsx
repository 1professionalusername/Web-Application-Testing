import React from 'react';

const Display = ({ balls, strikes, foul, hit }) => {
    return (
        <div>
            <h1>Balls: {balls}</h1>
            <h1>Strikes: {strikes}</h1>
            {/* <h1>Foul: {foul}</h1>
            <h1>Hit: {hit}</h1> */}
        </div>
    );
};

export default Display;