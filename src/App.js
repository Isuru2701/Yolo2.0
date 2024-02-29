import './App.css';

function App() {
  return (
      <div className='landing-container'>

      <div className='landing-title'>
        <h1>Hello <br /> There!</h1>
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
