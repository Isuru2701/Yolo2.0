import './App.css';
import { Select, MenuItem } from '@mui/material';

function App() {
  return (
    <div className='landing-container'>

      <div className='landing-title' style={{ marginLeft: '100px', minHeight: '100vh', position: 'relative' }}>
        <div>
          <h1 style={{ fontSize: '100px', fontWeight: '700', overflow: 'hidden', borderRight: '0.15em solid var(--tone-highlight)', whiteSpace: 'nowrap', margin: '0 auto', letterSpacing: '0.15em', color: 'var(--sharp-accent)', animation: 'typing 2s steps(40, end), blink-caret 0.75s step-end infinite' }}>Hello <br /> There!</h1>
          <div className="image-container" style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)' }}>
            <img src='feature-icon-02.svg' className="fixed-image" style={{ width: '300%', objectFit: 'cover' }} alt="Feature Icon" />
            <img src='feature-icon-05.svg' className="fixed-image" style={{ width: '300%', objectFit: 'cover' }} alt="Feature Icon" />
          </div>
        </div>
        <br />
        <h6 style={{ color: 'white', textAlign: 'center' }}> Ready to Dive into a World of Endless Entertainment? Let's Get Started!</h6>
        <br />
        <p style={{ border: 'none', textAlign: 'center', backgroundColor: 'var(--deep-blue)', borderRadius: '20px', padding: '30px', color: 'var(--highlight-white)', zIndex: 20 }}>YOLO is a media recommendation system that helps you find your next obsession, like you're asking a friend!</p>
        <button class="landing-button" onClick={() => window.location.href = '/#chat'}> Lets chat! </button>
      </div>
      {/* 
      <div className='prompts'> */}

      {/* </div> */}


      <br />
      <br />
      <br />
      <div className='text_area' id='chat' style = {{zIndex:20}}>
        <br />
        <textarea rows="4" cols="50"></textarea>

        <div className='buttons'>          
          <Select
            label='Limit'
            className="landing-button"
          >
            <MenuItem value="None">None</MenuItem>
            <MenuItem value="Movies">Movies</MenuItem>
            <MenuItem value="TV">TV</MenuItem>
            <MenuItem value="Anime">Anime</MenuItem>
            <MenuItem value="Songs">Songs</MenuItem>
            <MenuItem value="Books">Books</MenuItem>
          </Select>
          <button className="landing-button submit">Submit</button>

        </div>

      </div>
    </div>
  );
}

export default App;
