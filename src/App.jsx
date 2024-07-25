import React, { useRef } from 'react'
import { useState } from 'react'
function App() {
 
  const nameRef = useRef("")
  const ageRef = useRef("")
  const descRef = useRef("")

  function handleSubmit (e) {
    e.preventDefault()
    const user = {
      name : nameRef.current.value,
      age: ageRef.current.value,
      desc: descRef.current.value
    }
    console.log(user);
  }
return (
    <div className='hello'>
      <form action="">
        <input ref={nameRef} type="text" placeholder='enter name ...' />
        <input ref={ageRef}  type="text" placeholder='enter age ...' />
        <textarea ref={descRef} placeholder='enter description ...'></textarea>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default App