import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';



const PostDetail = () => {
    const{postId}=useParams();
    const[post,setPosts]=useState({});
    const[comment, setComment]=useState([]);

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[postId])

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    }, [postId]);

    const{id,title,body}=post;
    return (
        <div>
           <h4><strong> Id : {id} </strong> {title}</h4>
           <p>{body}</p>
           <button>Comment {comment.length}</button>
           {
               comment.map(com=><Comments comment={com}></Comments>)
           }
        </div>
    );
};

export default PostDetail;