import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [posts, setPosts] = useState([]);

    const handleLogin = () => {
        fetch('https://backend-i9tl.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.message); });
            }
            return response.json();
        })
        .then(data => {
            if (data.message === 'Login successful!') {
                loadUserPosts();
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    };

    const loadUserPosts = () => {
        fetch('https://backend-i9tl.onrender.com/user-posts')
        .then(response => response.json())
        .then(posts => {
            setPosts(posts);
        });
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            <h2>Your Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Login;