import React from 'react';

// Typically, only use inline styles if they're dynamic.
function HandleError(props){
    if(props.message){
    return (
        <div>
            <h4 style={{color:'red'}}>{props.message}</h4>
        </div>
    )
    }else{
        return(
            <></>
        )
    }
}

export default HandleError; 
