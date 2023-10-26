import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className = 'app'>
      <div className="app_videos">
        <Video 
        url = 'https://assets.mixkit.co/videos/preview/mixkit-hacker-in-a-scary-mask-sitting-in-front-of-computer-50751-large.mp4'
        channel = "RickyReviews" 
        description= "YOOOO this works!"
        song = "React is on fireee!"
        likes = {123} 
        messages={456} 
        shares={789} />
        
        <Video 
        url = 'https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761'
        channel = "ShauryaCool" 
        description= "How you like me now!"
        song = "Starboy - The Weeknd"
        likes = {111} 
        messages={222} 
        shares={333} />
      </div>
      

      {/* app container */}
        {/* videos */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}

    </div>
    
  );
}

export default App;
