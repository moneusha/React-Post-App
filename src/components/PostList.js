import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';
import './index.css';

const PostList = ({ posts, onEdit }) => {
  return (
    <div className="post-list">
      <h1 className='heading'>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            {post.imageUrl && <img src={post.imageUrl} className='image-size' alt={post.title} />}
            <p>{post.content}</p>
            <Link to="/create">
              <button onClick={() => onEdit(index)}>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/create">
        <button className='new'>Create New Post</button>
      </Link>
    </div>
  );
};

export default PostList;
