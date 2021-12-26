import './App.css';
import {BrowserRouter, Router,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Splash from './common/Splash';
import PhantomConnect from './connections/PhantomConnect';

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
                    <Route path="/" element={<Splash />} />
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
