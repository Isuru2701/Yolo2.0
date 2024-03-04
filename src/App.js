import './App.css';

function App() {
  return (
    <div className='landing-container'>

      <div className='landing-title'>
        <div>
          <h1>Hello <br /> There!</h1>
          <div>
            <img src='feature-icon-02.svg' width={"200%"} style={{marginLeft: "100%"}} />
          </div>
        </div>
        <br/>
        <h6 style={{ color: 'white', textAlign: 'center' }}> Ready to Dive into a World of Endless Entertainment? Let's Get Started!</h6>
        <br />
        
        <p style={{border: 'none', backgroundColor: 'var(--neutral-purple)', borderRadius: 20, padding: 10}}>YOLO is a media recommendation system that left you find your next obsession, like your asking a friend!</p>
      </div>
      {/* 
      <div className='prompts'> */}
      <center><button id="prompt"> Get prompt </button></center>
      {/* </div> */}

      <div className='text_area'>
        <h2 id='write'>Write your prompt here:</h2>
        <br />
        <textarea rows="4" cols="50"></textarea>

        <div className='buttons'>

          <button id="obscure">obscure</button>
          <button id="limit-to">Limit to</button>
          <button id="Submit">Submit</button>

        </div>

      </div>
    </div>
  );
}

export default App;
