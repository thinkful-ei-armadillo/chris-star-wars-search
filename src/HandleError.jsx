import React from 'react';

function HandleError(props){
    if(props.message){
    return (
        <div>
            <h4>{props.message}</h4>
        </div>
    )
    }else{
        return(
            <div></div>
        )
    }
}

export default HandleError; 
