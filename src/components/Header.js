import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  let activesection = window.location.pathname
  return (
    <div className='header'>
      <h3>Japan</h3>
      
      <ul>

<Link to="/">

<li
className={activesection === "/" ? "active" : ""}

>Home</li>

</Link>


<Link to="/Geisha">

<li

className={activesection === "/Geisha" ? "active" : ""}

>Geisha</li>

</Link>


<Link to="/Samurai">

<li

className={activesection === "/Samurai" ? "active" : ""}


>Samurai</li>

</Link>





      </ul>

      
      
       </div>
  )
}

export default Header