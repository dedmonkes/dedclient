import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/about/About';
import { useState } from 'react';
import Landing from './common/Landing';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [publicKey, setPublicKey] = useState('');
  const phantom = async () => { 
    try {
      const resp = await window.solana.connect();
      if(resp != undefined || resp != null) { 
        setIsLoggedIn(true);
        setPublicKey(resp.publicKey.toString());
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <Navbar publicKey={publicKey} authState={isLoggedIn} phantom={phantom} />
      <div className="container-fluid">
              <div className="row">
                  <div className="col p"><br />
                  <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Landing authState={isLoggedIn} publicKey={publicKey} />} exact />
                      <Route path="/about" element={<About />} exact/>
                  </Routes>
                  </BrowserRouter>
                  </div>
              </div>

    </div>
    </div>
  );
}


export default App;
