


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Editpost = () => {
  const { id } = useParams(); // Get post ID from URL params
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    author_name: '',
    content: '',
    user_id: 0,
    email: ''
  });

  // Fetch the existing post data when the component loads
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`);
        if (!response.ok) throw new Error('Failed to fetch post data');
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  // Handle form submission to update the post
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        alert('Post updated successfully');
        navigate('/'); // Redirect to the home page or any other page after successful update
      } else {
        throw new Error('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={post.title || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Author Name:
          <input
            type="text"
            name="author_name"
            value={post.author_name || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            name="content"
            value={post.content || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          User ID:
          <input
            type="number"
            name="user_id"
            value={post.user_id || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={post.email || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default Editpost;