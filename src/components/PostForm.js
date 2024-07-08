import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostForm.css';
import './index.css';

const PostForm = ({ post, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImageUrl(post.imageUrl || '');
    } else {
      setTitle('');
      setContent('');
      setImageUrl('');
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, imageUrl });
    navigate('/');
  };

  return (
    <div className="post-form">
      <h1>{post ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:  </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:  </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:  </label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PostForm;
