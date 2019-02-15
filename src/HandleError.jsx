import React from 'react';

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