import dedmonke from './images/dedmonke.png'
import concatAddr from './common/utils'

const Navbar = (props: any) => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="ded-logo me-4"><a href="/"><img src={String(dedmonke)} className="monke-stamp" /></a> Ded Monkes</span>
          <div className="float-end">
              {!props.authState && <button className="btn btn-outline-primary" onClick={() => props.phantom()}><span className="material-icons">account_balance_wallet</span></button>}
              {props.authState && <span>{concatAddr(props.publicKey)}</span>}
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

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
        </div>
      </nav>
    )
}

export default Navbar
