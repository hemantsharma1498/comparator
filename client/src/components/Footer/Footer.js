import React from 'react'
import './Footer.css'

function Footer(props) {
  return (
    <section className='Footer'>
        <h1 id='footer-main'>
            The New Streets Journal
        </h1>
        <p id='footer-descriptor'>
            Property of Coterie Group.
        </p>
        {/* <div className='Right-material'>
            <p id='user-name'>{props.name}</p>  
            <button id='log-toggle'>Logout</button> 
        </div>
         */}
    </section>
  )
}

Footer.defaultProps={
    title: 'News Feed'
}

export default Footer
