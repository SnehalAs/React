
import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data.slice(0, 5)); 
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') return;

    if (editId !== null) {
      
      try {
        const response = await fetch(`${API_URL}/${editId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: editId, title, body }),
        });
        const updatedPost = await response.json();
        const updatedPosts = posts.map((post) =>
          post.id === editId ? updatedPost : post
        );
        setPosts(updatedPosts);
        setEditId(null);
      } catch (error) {
        console.error('Error updating post:', error);
      }
    } else {
      
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        });
        const newPost = await response.json();
        setPosts([...posts, newPost]);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }

    setTitle('');
    setBody('');
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h1>CRUD OPERATIONS</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          style={{ padding: '10px', width: '90%', marginBottom: '10px' }}
        />
        <textarea
          value={body}
          onChange={handleBodyChange}
          placeholder="Body"
          style={{ padding: '10px', width: '90%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          {editId !== null ? 'Update Post' : 'ADD TASK'}
        </button>
      </form>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: '10px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '5px',
              textAlign: 'left',
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)} style={{ marginRight: '5px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
