import React, { useState } from 'react';

const Createpost = () => {

    const [title, setTitle] = useState('');
    const [author_name, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [user_id, setUserid] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        const response = await fetch('http://localhost:5000/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, author_name, content, user_id }),
        });
  
        if (response.ok) {
          // Clear the form fields after successful submission
          setTitle('');
          setAuthor('');
          setContent('');
          setUserid('')
          alert('Post successfull')
        } else {
          // Optionally handle non-OK responses here
          console.error('Failed to post.');
        }
      } catch (error) {
        // Optionally handle network or other errors here
        console.error('Failed to post.', error);
      }
    };
      
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type='text' value={title} 
        onChange={(e) => setTitle(e.target.value)} placeholder='title' required />

        <input type='text' value={author_name} 
        onChange={(e) => setAuthor(e.target.value)} placeholder='author' required />

        <input type='text' value={content} 
        onChange={(e) => setContent(e.target.value)} placeholder='description' required />

<input type='number' value={user_id} 
        onChange={(e) => setUserid(e.target.value)} placeholder='User_id' />
        
        
        <button type='submit'>Create</button>
        </form>
        </>
    );
};

export default Createpost;