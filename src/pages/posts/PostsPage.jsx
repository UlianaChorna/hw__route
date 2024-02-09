import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/navBar';
import './post.scss'
import { useNavigate, useParams } from 'react-router-dom';

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const navigation = useNavigate();
  const { postId } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (postId) {
      const post = posts.find(post => post.id === parseInt(postId));
      setSelectedPostId(post);
    }
  }, [postId, posts]);
   
  const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const firstTenPosts = jsonData.slice(0, 10);
        setPosts(firstTenPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  const handlePostClick = (postId) => {
    setSelectedPostId(posts.find(post => post.id === postId));
    navigation(`/posts/${postId}`);
  };

  return (
    <div className='container'>
      <NavBar />
      <div>
      <h2>Post List</h2>
      <ul className='post__list'>
        {posts.map(post => (
          <li key={post.id} className='post__item'>
            <span onClick={() => handlePostClick(post.id)}>{post.title}</span>
          </li>  
       
        ))}
      </ul>
    </div>
    {postId && selectedPostId && (
            <div className='post__details'>
              <h2>Post Details</h2>
              <p>Titile: {selectedPostId.title}</p>
              <p>Body: {selectedPostId.body}</p>
            </div>
          )}
    </div>
  )
}

export default PostPage;