import React from 'react';

function Search(props){
    return(
        <form forhtml="search" onSubmit={(e) => {props.getResults(e)}}>
            <label>Character Name Search</label>
            <input type="text" name="search-input" onChange={(event) => 
                props.updateSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search; 
