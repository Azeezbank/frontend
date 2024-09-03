import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`)
      .then(response => response.json())
      .then((data) => setPost(data) )
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{post.content}</h1>
      <p>{post.content}</p>
      <small>By {post.author_name}</small>
    </>
  );
}

export default PostDetail;