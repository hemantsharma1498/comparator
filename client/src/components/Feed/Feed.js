import React from 'react'

function Feed() {
  return (
    <section className="flex justify-center h-[788px] w-full">
      {/* FAVOURITE TOPICS */}
      <div className="flex justify-center w-1/6 pt-10">
        <p className="text-black h-10 bg-lmgray px-4 pt-1 border-2 border-gray rounded-md">
          Favourites:
        </p>
      </div>
      
      {/* MAIN NEWS GRID */}
      <div className="bg-white flex justify-center w-4/6  grid-cols-3">
        <p className="text-3xl pt-3">
          SOME PURE ABSOLUTE 
        </p>  
      </div>

      <div className="w-1/6"></div>
      
      </section>
  )
}

export default Feed
