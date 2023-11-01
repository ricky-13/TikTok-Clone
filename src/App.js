import { useEffect } from 'react';
import './App.css';
import Video from './Video';
import { useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  // tried using axios didnt work, also for axios make a separate file and set base url and import axios 
/*
useEffect(() => {
    async function fetchPosts() {
      try{
      const response = await axios.get('http://localhost:9000/v2/posts');
      setVideos(response.data);

      return response;
  }

  fetchPosts();
}, []);
*/


  useEffect(() => {
    async function fetchPosts() {
      try{
      const response = await fetch('http://localhost:9000/v2/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchPosts();
}, []);

  return (
    // BEM naming convention
    <div className = 'app'>
      <div className="app_videos">
        {videos.map( 
          ({url, channel, description, song, likes, messages, shares}) => (
            <Video 
              url = {url}
              channel = {channel}
              song = {song}
              likes = {likes}
              messages = {messages}
              description = {description}
              shares = {shares}
              />
          ))
        }
      
      </div>
    </div>
    
  );
}

export default App;
