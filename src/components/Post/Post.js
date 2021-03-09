import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
const Post = (props) => {
    const{id,title,body}=props.post;
    return (
        <div className="post-border">
            <h4><strong>Id : {id}</strong> {title}</h4>
            <p>{body}</p>
            <br/>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;