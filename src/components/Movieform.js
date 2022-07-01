import React, {useRef, useState} from 'react'

function Movieform({addMovie}) {

  const [isTimeInvalid, setIsTimeInvalid] = useState(false);
  const [duration, setDuration] = useState("");

  const inputName = useRef();
  const inputRating = useRef();

  const submit = (e) => {
    e.preventDefault();
    if (duration.includes("m") || duration.includes("h")) {
      addMovie(inputName.current.value, inputRating.current.value, duration);
    }
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
              onChange={() => setIsTimeInvalid(false)}
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
              value={duration}
              type='text' 
              onChange={e => {
                const {value} = e.target;
                setDuration(value)
                if (value.includes("m") || value.includes("h")) {
                  setIsTimeInvalid(false)
                } else {
                  setIsTimeInvalid(true);
                }
              }}
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {isTimeInvalid && <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>}
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
