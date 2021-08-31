import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);        
      }, 1500);
  }
  



  const toggleMode = () => {
    if(mode == 'light' || mode == 'success' || mode == 'danger'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a1a1a';
      showAlert("Dark mode has been enabled", "success");
    }
    else if(mode == 'dark' || mode == 'success' || mode == 'danger'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleMode1 = () => {
    if(mode == 'light' || mode == 'dark' || mode =='success'){
      setMode('danger');
      document.body.style.backgroundColor = '#a71523';
      showAlert("Red Mode has been enabled", "success");
    }
    else if(mode == 'light' || mode == 'dark' || mode =='danger'){
      setMode('success');
      document.body.style.backgroundColor = '#188218';
      showAlert("green Mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us"/>  */}
      {/* <Navbar/> */}
      {/* /about         |   both will show about page so its a 
          /about/user    |     good prcatice to use "exact       */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
        <Alert exact alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route path="/">
              <TextForm heading="Enter Text to Analyze Below" showAlert={showAlert} mode={mode}/>
            </Route>
          </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
