import React from 'react';

function Results(props){
    return(
        <div>
            {props.results.map((result, index) => 
            <div key={index}>
                <p>{result.name}</p>
                <p>Born: {result.birth_year}</p>
                <p>Gender: {result.gender}</p>
                <p>Eye Color: {result.eye_color}</p>
                <p>Hair Color: {result.hair_color}</p>
                <p>Skin Color: {result.skin_color}</p>
            </div>
            )
            }
        </div>
    )
}

export default Results; 
