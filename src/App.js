import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="ded-logo">DED MONKES</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <span class="ms-1 d-none d-sm-inline">ANNOUNCEMENTS</span> <span class="material-icons">lock</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <span class="ms-1 d-none d-sm-inline">COMMUNITY</span> <span class="material-icons">lock</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <span class="ms-1 d-none d-sm-inline">DEDABASE</span> <span class="material-icons">lock</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <span class="ms-1 d-none d-sm-inline">MARKETS</span> <span class="material-icons">lock</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <span class="ms-1 d-none d-sm-inline">ROADMAP</span> <span class="material-icons">lock</span>
                            </a>
                        </li>
                        <li>
                            <img src="./monke.png" alt="monke icon" width="128" height="128" />
                        </li>
                    </ul>
                    <span className="mb-4 btn-phantom px-2 py-2">
                      
                    <img className="phantom-logo me-3" src="./icons/phantom.png" alt="boo! very scary" /><span>CONNECT </span><span class="material-icons mb-1">lock</span></span>
                </div>
            </div>
            <div className="col py-1"><br />
              <div className="pt-6">
              WE ARE CURRENTLY WORKING ON GETTING DERUGGED<br />
                <img src="./icons/wait.png" alt="You'll wait fucker." />
              </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
