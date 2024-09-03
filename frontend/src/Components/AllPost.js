import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://backend-i9tl.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  if (!posts) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div>
      <h1>User Posts</h1>
      <ul style={{display:'flex'}}>
        {posts.map(post => (
          <li key={post.id} className='bg-danger p-3 m-5 text-light' style={{ width:'60%', listStyle:'none'}}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 5)}..</p>
            <small>By {post.author_name}, {post.created_at}</small> <br/>
            <Link to={`/PostDetail/${post.id}`}>
              <p>Read more <i className='bi  bi-chevron-double-right'></i> </p> </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default AllPost;