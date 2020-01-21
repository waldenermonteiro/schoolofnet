import React from 'react';
export const Message = (props) => {
    return (
        <h2>{props.title}</h2>
    )
}
export const MessageSuccess = (props) => {
    return (
        <div className="alert alert-success" role="alert">
            This is a success alert—check it out! Your messag is: {props.message}
      </div>
    )
}