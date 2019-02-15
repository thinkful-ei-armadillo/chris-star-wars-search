import React from 'react';

function Results(props){
    return(
        props.names.map((name, index) => 
        <li key={index}>{name}</li>
        )
    )
}

export default Results; 