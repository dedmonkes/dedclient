import dedmonke from './images/dedmonke.png'
import concatAddr from './common/utils'
declare global {
  interface Window {
      solana:any;
  }
}

const Navbar = (props: any) => {
  const disconnect = () => { 
    window.solana.disconnect();
    props.authUpdate(false);
    
  }
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="ded-logo me-4"><a href="/"><img src={String(dedmonke)} className="monke-stamp" /></a> Ded Monkes</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://discord.gg/F57QCrtUWw">Discord</a>
              </li>
              <li className="nav-item">
                {props.authState && <a className="nav-link" href="#">Feed <span className="material-icons">lock</span></a>}
              </li>
              <li className="nav-item">
                {props.authState && <a className="nav-link" href="#">Explore <span className="material-icons">lock</span></a>}
              </li>
              <li className="nav-item">
                {props.authState && <a className="nav-link" href="#">Markets <span className="material-icons">lock</span></a>}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://book.ded.social">Gitbook</a>
              </li>
            </ul>
          </div>
          <div className="float-end">
              {!props.authState && <button className="btn btn-outline-primary" onClick={() => props.phantom()}><span className="material-icons">account_balance_wallet</span></button>}
              {props.authState &&<div> <span>{concatAddr(props.publicKey)}</span>
              <br /> 

              <a className="btn-outline-primary disconnect" onClick={() => disconnect()}>DISCONNECT</a></div>
              } 
          </div>
          

          <button className="btn btn-outline-primary d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </nav>
    )
}

export default Navbar
