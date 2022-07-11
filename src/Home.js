import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

export default function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const blogCollection = collection(db, 'blogs');
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(blogCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, 'blogs', id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="home-page">
      {postList.map((post) => {
        return (
          <div className="poster">
            <div className="posterHeader"></div>
            <div className="title">
              <h1>{post.title}</h1>


              <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  &#128465;
                </button>
              )}
            </div>

            </div>
            

            <div className="postContainer">
              {post.post}

              <h3>@{post.author.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
