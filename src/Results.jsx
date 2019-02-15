import React from 'react';

function Results(props){
    console.log(props)
    return(
        <ul>
            {props.results.map((result, index) => 
            <li key={index}>
                {result.name}<br />
                Born: {result.birth_year}<br />
                Gender: {result.gender}<br />
                Eye Color: {result.eye_color}<br />
                Hair Color: {result.hair_color}<br />
                Skin Color: {result.skin_color}<br /> <br />
            </li>
            )}
        </ul>
    )
}

export default Results; 