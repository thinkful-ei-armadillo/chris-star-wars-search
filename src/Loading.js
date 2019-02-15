import React from 'react'

function Loading(props) {
    if(props.loading){
        return (
            <div>Loading...</div>
        ) 
    }

    // Use either an empty <div /> or `null` to represent an empty element
    return (
        <></>
    )
}

export default Loading; 
