import React from 'react'

function Movieslist({movies}) {

  const formatDuration = duation => {
    if (duation.includes("m")) {
      const num = parseInt(duation.replace("m","")) / 60;
      const hr =  Math.round(num * 10) / 10
      return hr + " Hrs";
    } else if (duation.includes("h")) {
      return duation.replace("h", " Hrs");
    }
  }    


  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      {movies
      .filter(({name, rating, duration}) => {
        if (name && rating && duration) {
          return true;
        } else {
          return false;
        }
      })
      .map(({name, rating, duration}) => {
        return (
<li key={name}
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
        <div className='layout-column w-40'>
          {/* use this header for movie name */}
          <h3 className='my-3'>{name}</h3>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
          <p className='my-0'>Ratings: {rating}/100</p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
          <p className='justify-content-end'>{formatDuration(duration)}</p>
        </div>
      </li>
        )
      })}
      </ul>
    </section>
  )
}

export default Movieslist;
