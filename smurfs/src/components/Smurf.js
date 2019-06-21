import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.height}</p>
            <p>{props.age}</p>
        </div>
    );
};

export default Smurf;