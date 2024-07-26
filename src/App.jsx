import React, { useRef, useState } from 'react'
import "./App.css"

function App() {
  const [errors, setErrors] = useState({})
  const nameRef = useRef("")
  const emailRef = useRef("")
  const userRef = useRef("")
  const passwordRef = useRef('')
  const areaRef = useRef("")

  function handleSubmit(e) {
    e.preventDefault()
    
    const newErrors = {}
    if (nameRef.current.value.trim() === "") {
      newErrors.name = "Name cannot be empty"
    }
    if (emailRef.current.value.trim() === "") {
      newErrors.email = "Email cannot be empty"
    }
    if (userRef.current.value.trim() === "") {
      newErrors.userName = "Username cannot be empty"
    }
    if (passwordRef.current.value.trim() === "") {
      newErrors.password = "Password cannot be empty"
    }
    if (areaRef.current.value.trim() === "") {
      newErrors.desc = "Description cannot be empty"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      userName: userRef.current.value,
      password: passwordRef.current.value,
      desc: areaRef.current.value
      
    }
    localStorage.setItem("user", JSON.stringify(user))  


    console.log(user)
    nameRef.current.value = ""
    emailRef.current.value = ""
    userRef.current.value = ""
    passwordRef.current.value = ""
    areaRef.current.value = ""

    setErrors({})
  localStorage(setData(user))

  }

  return (
    <div className='wrapper'>
      <h2 className='title'>Create an accont</h2>
      <p className="desc">Kindly fill following details to create your account</p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={nameRef} type="text" placeholder='Enter your full name...' />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <input ref={emailRef} type="email" placeholder='Enter your email address...' />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <input ref={userRef} type="text" placeholder='Enter your user name...' />
          {errors.userName && <p className="error">{errors.userName}</p>}
        </div>
        <div>
          <input ref={passwordRef} type="password" placeholder='Enter your password...' />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <textarea ref={areaRef} placeholder='Your Biography'></textarea>
          {errors.desc && <p className="error">{errors.desc}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
