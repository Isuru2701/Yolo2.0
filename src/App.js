import './App.css';
import { Select, MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import Cookies from 'js-cookie';
import { GridComponent } from './components/elements/GridComponent';

function App() {
  const [error, setErorr] = useState('');

  //check the text area for input
  const [text, setText] = useState("");
  const [limit, setLimit] = useState('');
  const [media, setMedia] = useState([])
  const [movies, setMovies] = useState([]);
  const [tv, setTV] = useState([]);
  const [songs, setSongs] = useState([]);
  const [books, setBooks] = useState([]);
  const [anime, setAnime] = useState([]);
  const [keywords, setKeywords]  = useState([]);


  const handleFetchKeywords = async (event) => {

    if (text === '') {
      setErorr('Please enter something');
      return;
    }
    else {
      setErorr('');
    }

    event.preventDefault();
    console.log('fetching keywords');

    try {

      //clear old contents 
      setMovies([]);
      setTV([]);
      setSongs([]);
      setBooks([]);
      setAnime([]);

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
        var data = await response.json();
        console.log(data.join(', '));

        //stringify the list
         setKeywords(data.map(item => item.trim().toLowerCase()).join(','));

        //check limit to is set

        console.log(keywords);


        if (limit === 'movies') {
          handleFetchMovies(keywords);

        }
        else if (limit === 'tv') {
          handleFetchTV(keywords);

        }
        else if (limit === 'songs') {
          handleFetchSongs(keywords);

        }
        else if (limit === 'anime') {
          handleFetchAnime(keywords);
          handleFetchAnimeMovie(keywords);

        }
        else if (limit === 'books') {
          handleFetchBooks(keywords);

        }
        else {
          console.log('--------------');
          handleFetchSongs(keywords);
          console.log('--------------');
          handleFetchMovies(keywords);
          console.log('--------------');
          handleFetchTV(keywords);
          console.log('--------------');
          handleFetchBooks(keywords);
          console.log('--------------');
          handleFetchAnime(keywords);
          console.log('--------------');
          handleFetchAnimeMovie(keywords);
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
      console.log(`${process.env.REACT_APP_API_URL}/api/songs?keywords=${keywords}&media_type=song`);

      const songResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/songs?keywords=${keywords}&media_type=song`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (songResponse.ok) {
        //print response contents
        var data = await songResponse.json();
        console.log(data);

        var cap = 5;
        //process the data and put into media
        if (Cookies.get('premium')) {
          var cap = 20;
        }


        const transformedData = data.slice(0, cap).map(item => ({
          search_link: item.video_url,
          image_link: item.thumbnail,
          title: item.title,
        }));
        setSongs(songs => [...songs, ...transformedData]);

        console.log(songs);

      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
      
    }

  }

  const handleFetchMovies = async (keywords) => {
    console.log('fetching movies');

    try {
      const moviesResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/tv?keywords=${keywords}&media_type=movie`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (moviesResponse.ok) {
        //print response contents
        var data = await moviesResponse.json();
        console.log(data);


        var cap = 5;
        //process the data and put into media
        if (Cookies.get('premium')) {
          var cap = 20;
        }


        const transformedData = data.slice(0, cap).map(item => ({
          search_link: "https://www.themoviedb.org/movie/" + item.id,
          image_link: item.poster_path,
          title: item.title,
          overview: item.overview
        }));
        setMovies(movies => [...movies, ...transformedData]);



      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchTV = async (keywords) => {
    console.log('fetching tv shows');

    try {
      const tvResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/tv?keywords=${keywords}&media_type=tv`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (tvResponse.ok) {
        //print response contents
        var data = await tvResponse.json();
        console.log(data);


        var cap = 5;
        //process the data and put into media
        if (Cookies.get('premium')) {
          var cap = 20;
        }


        const transformedData = data.slice(0, cap).map(item => ({
          search_link: "https://www.themoviedb.org/tv/" + item.id,
          image_link: item.poster_path,
          title: item.title,
          overview: item.overview
        }));
        setTV(tv => [...tv, ...transformedData]);




      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchBooks = async (keywords) => { //TODO: books isnt working, fix it 
    console.log('fetching books');
    console.log(keywords);


    try {
      const booksResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/books?keywords=${keywords}&media_type=song`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (booksResponse.ok) {
        //print response contents
        var data = await booksResponse.json();
        console.log(data);


        var cap = 5;
        //process the data and put into media
        if (Cookies.get('premium')) {
          var cap = 20;
        }


        const transformedData = data.slice(0, cap).map(item => ({
          search_link: item.id,
          image_link: item.poster_path,
          title: item.title,
          overview: item.overview
        }));
        setTV(tv => [...tv, ...transformedData]);




      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }


  const handleFetchAnime = async (keywords) => {
    console.log('fetching songs');

    try {
      const animeResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/anime?keywords=${keywords}&media_type=tv`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (animeResponse.ok) {
        //print response contents
        var data = await animeResponse.json();
        console.log(data);


        var cap = 5;
        //process the data and put into media
        if (Cookies.get('premium')) {
          var cap = 20;
        }


        const transformedData = data.slice(0, cap).map(item => ({
          search_link: item.moreinfo_url,
          image_link: item.thumbnail,
          title: item.title,
          overview: item.synopsis
        }));
        setAnime(anime => [...anime, ...transformedData]);




      } else {
        setErorr("Sorry, we didn't quite catch that. try");

      }
    } catch (error) {
    }

  }

  const handleFetchAnimeMovie = async (keywords) => {
    console.log('fetching songs');

    try {
      const animeMovieResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/anime?keywords=${keywords}&media_type=movie`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });

      if (animeMovieResponse.ok) {
        //print response contents
        var data = await animeMovieResponse.json();
        console.log(data);


        var cap = 5;
        //process the data and put into media
        if (Cookies.get('premium')) {
          var cap = 20;
        }


        const transformedData = data.slice(0, cap).map(item => ({
          search_link: item.moreinfo_url,
          image_link: item.thumbnail,
          title: item.title,
          overview: item.synopsis
        }));
        setAnime(anime => [...anime, ...transformedData]);




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
        <textarea id="prompt" rows="4" cols="50" onChange={(e) => setText(e.target.value)}></textarea>

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

      <div style={{ width: '90%' }}>
        {movies.length > 0 && <GridComponent media={movies} type="movies" />}
        {tv.length > 0 && <GridComponent media={tv} type="tv" />}
        {songs.length > 0 && <GridComponent media={songs} type='songs' />}
        {books.length > 0 && <GridComponent media={books} type='books' />}
        {anime.length > 0 && <GridComponent media={anime} type='anime' />}

      </div>


    </div>
  );
}

export default App;

