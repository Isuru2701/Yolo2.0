import './App.css';
import { Select, MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { useState } from 'react';


function App() {
  const [error, setErorr] = useState('');
  const [text, setText] = useState('');
  const [limit, setLimit] = useState('');
  const [media, setMedia] = useState({ 'url': '', 'title': '', 'type': '', 'premium': false })
  const handleFetchKeywords = async (event) => {

    if (text === '') {
      setErorr('Please enter something');
      return;
    }

    event.preventDefault();
    console.log('fetching keywords');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/keywords`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "prompt": text })
      });

      if (response.ok) {
        //print response contents
        var data = response.json();
        console.log(data);

        //stringify the list
        let string = data.join(', ');

        //check limit to is set
        handleFetchSongs(string);
        handleFetchMovies(string);
        handleFetchTV(string);
        handleFetchBooks(string);
        handleFetchAnime(string);


        if (limit === 'movies') {
          handleFetchMovies(string);

        }
        else if (limit === 'tv') {
          handleFetchTV(string);

        }
        else if (limit === 'songs') {
          handleFetchSongs(string);

        }
        else if (limit === 'anime') {
          handleFetchAnime(string);
          handleFetchAnimeMovie(string);

        }
        else if (limit === 'books') {
          handleFetchBooks(string);

        }





      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }


  }

  // example request : http://localhost:5000/movies?keywords=marvel,adventure&media_type=movie (movie / tv)

  const handleFetchSongs = async (keywords) => {
    console.log('fetching songs');

    try {
      const songResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/songs?${keywords}&media_type=song`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (songResponse.ok) {
        //print response contents
        var data = songResponse.json();
        console.log(data);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchMovies = async (keywords) => {
    console.log('fetching movies');

    try {
      const moviesResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/movies?${keywords}&media_type=movie`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (moviesResponse.ok) {
        //print response contents
        var data = moviesResponse.json();
        console.log(data);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchTV = async (keywords) => {
    console.log('fetching tv shows');

    try {
      const tvResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/tv?${keywords}&media_type=tv`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (tvResponse.ok) {
        //print response contents
        var data = tvResponse.json();
        console.log(data);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchBooks = async (keywords) => {
    console.log('fetching songs');

    try {
      const booksResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/books${keywords}&media_type=song`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (booksResponse.ok) {
        //print response contents
        var data = booksResponse.json();
        console.log(data);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }


  const handleFetchAnime = async (keywords) => {
    console.log('fetching songs');

    try {
      const animeResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/anime?${keywords}&media_type=tv`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (animeResponse.ok) {
        //print response contents
        var data = animeResponse.json();
        console.log(data);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchAnimeMovie = async (keywords) => {
    console.log('fetching songs');

    try {
      const animeMovieResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/anime?${keywords}&media_type=movie`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (animeMovieResponse.ok) {
        //print response contents
        var data = animeMovieResponse.json();
        console.log(data);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }




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
      <div className='text_area' id='chat' style={{ zIndex: 20 }}>
        <br />
        <h1 style={{ textAlign: 'left', color: 'white' }}>Whats on your mind?</h1>
        <textarea rows="4" cols="50" onChange={(e) => setText(e.target.value)}></textarea>

        <div className='buttons'>
          <InputLabel id="demo-simple-select-label" sx={{
            color: 'var(--tone-highlight)'
          }}>Limit to</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label='Limit'
            className="landing-button"
            sx={{
              color: 'var(--tone-highlight)',
              padding: '5px'
            }}

          >
            <MenuItem value="None" className="menu-item" onChange={() => setLimit('')}>None</MenuItem>
            <MenuItem value="Movies" className="menu-item" onChange={() => setLimit('movies')}>Movies</MenuItem>
            <MenuItem value="TV" className="menu-item" onChange={() => setLimit('tv')}>TV</MenuItem>
            <MenuItem value="Anime" className="menu-item" onChange={() => setLimit('anime')}>Anime</MenuItem>
            <MenuItem value="Songs" className="menu-item" onChange={() => setLimit('songs')}>Songs</MenuItem>
            <MenuItem value="Books" className="menu-item" onChange={() => setLimit('books')}>Books</MenuItem>
          </Select>
          <button className="landing-button submit" onClick={handleFetchKeywords}>Submit</button>
          {error && <p className='error-message'>{error}</p>}
        </div>

      </div>
    </div>
  );
}

export default App;
