import React from 'react'
import comic from '../images/rug01.png'
import comic2 from '../images/rug02.png'

const Splash = () => {
    return (
  <div className="col-12 ms-auto">
      <img className="img-fluid mx-auto" src={comic}/> <br />
      <img className="img-fluid mx-auto" src={comic2} /> 
  </div>
    )
}

export default Splash
