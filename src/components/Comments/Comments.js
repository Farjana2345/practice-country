import React from 'react';

const Comments = (props) => {
    const {name} =props.comment;
   
    return (
        <div>
        <h4>{name}</h4>
        </div>
    );
};

export default Comments;