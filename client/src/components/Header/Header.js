import React from 'react'

function Header(props) {
  return (
    <section className='Header'>
        {/* <img src="../../../public/logo.png" alt="NSJ Logo" /> */}
        <h1>
            NEW STREET JOURNAL
        </h1>
        <div >
            <p>{props.name}</p>  
            <button>Logout</button> 
        </div>
        
    </section>
  )
}

Header.defaultProps={
    title: 'News Feed'
}

export default Header
