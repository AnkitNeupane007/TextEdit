import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383636';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="textutils" aboutText="About textutils" mode={mode}
        toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      <div className="container my-2">
        <TextForm heading="Enter your text here." mode={mode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
