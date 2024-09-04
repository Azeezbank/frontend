import React, { useState } from 'react';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        if (!userId) return;
        
        try {
            const response = await fetch(`https://backend-i9tl.onrender.com/api/postss/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    return (
        <div>
            <h1>User Posts</h1>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={handleUserIdChange}
            />
            <button onClick={fetchPosts}>Get Posts</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts found for this user.</p>
            )}
        </div>
    );
};

export default Login;