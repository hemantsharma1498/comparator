import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div className='Header'>
        <h1 id='feed-title'>
            Your News
        </h1>
        <div className='Right-material'>
            <p id='user-name'>{props.name}</p>  
            <button id='log-toggle'>Logout</button> 
        </div>
        
    </div>
  )
}

Header.defaultProps={
    title: 'News Feed'
}

export default Header
