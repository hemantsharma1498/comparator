import React from 'react'

function Footer(props) {
  return (
    <section className='Footer'>
        <h1 >
            The New Streets Journal
        </h1>
        <p >
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
