import React, {useRef} from 'react'

function Movieform({addMovie}) {

  const inputName = useRef(null);
  const inputDuration = useRef(null);
  const inputRating = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    addMovie(inputName.current.value, inputRating.current.value, inputDuration.current.value)
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={submit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              ref={inputName}
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              ref={inputRating}
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              ref={inputDuration}
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
