import './App.css';
import {BrowserRouter, Router,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Splash from './common/Splash';
import PhantomConnect from './connections/PhantomConnect';
import About from './pages/about/About';

function App() {
    const d = () => { 
    
  }
  return (
    <div className="App">
      <Navbar />
      <div class="container-fluid">
        <div class="row flex-nowrap">
            <div className="row">
                <div className="col py-1"><br />
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Splash />} exact />
                    <Route path="/about" element={<About />} exact/>
                </Routes>
                </BrowserRouter>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
