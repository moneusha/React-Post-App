import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  const initialPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', imageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', imageUrl: 'https://st5.depositphotos.com/35914836/64906/i/450/depositphotos_649066108-stock-photo-pink-flowers-park-spring-bloosom.jpg' }
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);

  const savePost = (post) => {
    if (currentPostIndex !== null) {
      const updatedPosts = posts.map((p, index) => (index === currentPostIndex ? { ...post, id: p.id } : p));
      setPosts(updatedPosts);
      setCurrentPostIndex(null);
    } else {
      setPosts([...posts, { ...post, id: posts.length + 1 }]);
    }
  };

  const editPost = (index) => {
    setCurrentPostIndex(index);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList posts={posts} onEdit={editPost} />} />
        <Route path="/create" element={<PostForm post={currentPostIndex !== null ? posts[currentPostIndex] : null} onSave={savePost} />} />
      </Routes>
    </Router>
  );
};

export default App;
