import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Data from './components/Data';
import LoadingBar from 'top-loading-bar/dist';
import About from './components/About';



function App() {

  const [Mode, setMode] = useState('light')
  const [text, updateText] = useState('')
  const [result, updateResult] = useState('')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(false)



  let handleChange = (e) => {
    updateText(e.target.value)
  }
  let movieBtn = async () => {

    setProgress(10)
    const data = await fetch(`https://www.omdbapi.com/?apikey=d6e232c&t=${text}`)
    setProgress(40)
    const parseData = await data.json()
    setProgress(70)
    console.log(parseData)
    if (parseData.Response !== "True") {
      setError(true)
    }
    else {
      console.log(parseData);
      updateResult(parseData)
      setError(false)
    }
    setProgress(100)
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#292b2c'
      document.body.style.color = 'white'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f7f7f7'
      document.body.style.color = 'black'
    }

  }
  return (
    <>
      <Router>
        <Navbar mode={Mode} toggleBtn={toggleMode} />
        <Routes>
          <Route path='/' element={<div>
            <LoadingBar
              color='#f11946'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <div className="d-flex mt-4">
              <div className="input-group mb-5 ps-md-5">
                <input name="search" id="search" className={`form-control bg-${Mode === 'dark' ? 'dark' : 'light'} text-${Mode === 'dark' ? 'light' : 'dark'}`} type="search" style={{ maxWidth: "90%" }} placeholder='Find Movies' onChange={handleChange} />
                <button type='search' className='btn btn-primary' onClick={movieBtn} >Search</button>
              </div>
            </div>
            {error !== true ?
              <Data resultMovie={result} mode={Mode} /> :
              <h1 className='text-center mt-5 text-danger '> No Result Found</h1>}
          </div>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
