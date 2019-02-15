import React from 'react';


/* The following markup would be easier to style.
   Lots of `<br />` is a code smell since it's
   presentation leaking into the markup. Spacing
   can be controlled with CSS more easily and
   maintain separation of markup and style.

<div>
  <p>{ result.name }</p>
  <p>{ result.birth_year }</p>
  <p>{ result.gender }</p>
</div>
*/

function Results(props){
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
