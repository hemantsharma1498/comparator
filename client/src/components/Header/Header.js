import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <section className='Header'>
        {/* <img src="../../../public/logo.png" alt="NSJ Logo" /> */}
        <h1 id='feed-title'>
            NEW STREET JOURNAL
        </h1>
        <div className='Right-material'>
            <p id='user-name'>{props.name}</p>  
            <button id='log-toggle'>Logout</button> 
        </div>
        
    </section>
  )
}

Header.defaultProps={
    title: 'News Feed'
}

export default Header
