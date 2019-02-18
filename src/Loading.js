import React from 'react'

function Loading(props) {
    if(props.loading){
        return (
            <div>Loading...</div>
        ) 
    }
    return (
        <div></div>
    )
}

export default Loading; 
