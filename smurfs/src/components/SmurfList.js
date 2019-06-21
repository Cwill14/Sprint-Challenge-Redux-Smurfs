import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => { 

    return (
        <div>
            <h1>Smurf List</h1>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf 
                        name={smurf.name}
                        id={smurf.id}
                        key={smurf.id}
                        age={smurf.age}
                        height={smurf.height}
                        deleteSmurf={props.deleteSmurf}
                    />
                )
            })}
        </div>
    );
};

export default SmurfList;