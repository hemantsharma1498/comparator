import React from 'react'

function Footer(props) {
  return (
    <section className="text-black bg-lmgray fixed bottom-0 inset-x-0 p-3">
        <h1 className="flex justify-center">
            The New Street Journal
        </h1>
        <p className="flex justify-center">
            Property of Coterie Group. All Rights Reserved.
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
