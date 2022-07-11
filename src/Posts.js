
import React, { useEffect, useState } from 'react';
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
export default function Posts({isAuth}) {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const blogCollection = collection(db, 'blogs');
  let navigate = useNavigate();
  const createBlog = async ()=>{
    await addDoc(blogCollection, {
        title, post, author:{name: auth.currentUser.displayName , id: auth.currentUser.uid}
    });
    navigate('/')

  };

  useEffect(()=>{
if (!isAuth){
    navigate('/Login')
}
  }, [isAuth, navigate])
  return (
    <div className="posts">
      <div className="posts-container">
        <h2>create a blog</h2>
        <div className="inputGp">
          <label>title:</label>
          <input
            placeholder="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>post:</label>
          <textarea
            placeholder="post...."
            onChange={(event) => {
              setPost(event.target.value);
            }}
          />
        </div>

        <button onClick={createBlog}>submit post</button>
      </div>
    </div>
  );
}
