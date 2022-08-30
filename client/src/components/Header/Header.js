import React from 'react'

function Header(props) {
  return (
    <section className="text-black bg-dgray">
        {/* <img src="../../../public/logo.png" alt="NSJ Logo" /> */}
        
        
        {/* MAIN TEXT AND USER LOGIN/LOGOUT */}
        <div className="flex items-center justify-center p-6">
          <h1 className="text-6xl px-3 rounded-md shadow-lg py-1 bg-lmgray">
              NEW STREET JOURNAL
          </h1>
          <div className="absolute right-20 mt-2 px-5 rounded-md shadow-lg py-1 bg-lmgray" >
              <p>{props.name}</p>  
              <button className="border-2 border-solid border-black rounded-md ">Logout</button> 
          </div>

        </div>
        

        {/* NAVBAR */}
        <nav className="inline">
        <ul>
          <li>
            Home
          </li>
          <li>
            World
          </li>
          <li>
            India
          </li>
          <li>
            Politics
          </li>
          <li>
            Economy
          </li>
          <li>
            Markets
          </li>
          <li>
            Opinion
          </li>
          <li>
            Real Estate
          </li>
        </ul>

      </nav>

        
    </section>
  )
}

Header.defaultProps={
    title: 'News Feed'
}

export default Header
