import React from 'react';

function Search(props){
    return(
        <form forhtml="search" onSubmit={(e) => {
            props.getResults(e)
            e.currentTarget.reset()}}>
            <label>Character Name Search:</label>
            <input type="text" value={props.searchValue} name="search-input" onChange={(event) => 
                props.updateSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search; 
