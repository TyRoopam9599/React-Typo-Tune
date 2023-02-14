import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  const [mode, setMode] = useState('dark');
  if (mode === 'dark') {
    document.body.style.backgroundColor = '#455A64';
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#455A64'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (

    <Router>
      <div>
        <Navbar title='TypoTune' mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/about' element={ <About mode={mode} toggleMode={toggleMode} />} />          
          <Route exact path="/" element={<TextInput heading="Try TypoTune - Word Counter, Character Counter, Lowercase to Uppercase, Uppercase to Lowercase, Remove Punctuation, Remove Extra Space, Replace Keywords" mode={mode} toggleMode={toggleMode} />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
