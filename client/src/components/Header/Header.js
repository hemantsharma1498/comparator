import React from 'react'

function Header(props) {
  return (
    <section className="text-black bg-lgray">        
        
        {/* MAIN TEXT AND USER LOGIN/LOGOUT */}
        <div className="flex items-center justify-center p-6">
          <h1 className="text-6xl px-3 rounded-md shadow-lg py-1 bg-lmgray">
              NEW STREET JOURNAL
          </h1>
          <div className="absolute right-20 mt-2 px-5 rounded-md shadow-lg py-1 bg-lmgray" >
              <p>{props.name}</p>  
              <button className="border-2 border-solid border-lmgray rounded-md ">Logout</button> 
          </div>

        </div>
        

        {/* NAVBAR */}
        <nav className="flex justify-center pb-2 ">
          <div className="px-2 hover:bg-lmgray">
            Home
          </div>
          <div className="px-2 hover:bg-lmgray">
            World
          </div>
          <div className="px-2 hover:bg-lmgray">
            India
          </div>
          <div className="px-2 hover:bg-lmgray">
            Politics
          </div>
          <div className="px-2 hover:bg-lmgray">
            Economy
          </div>
          <div className="px-2 hover:bg-lmgray">
            Markets
          </div>
          <div className="px-2 hover:bg-lmgray">
            Opinion
          </div>
          <div className="px-2 hover:bg-lmgray">
            Real Estate
          </div>
        
      </nav>

        
    </section>
  )
}

Header.defaultProps={
    title: 'News Feed'
}

export default Header
