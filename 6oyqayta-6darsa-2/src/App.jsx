import React, { useRef, useState } from 'react'
import "./App.css"

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    description: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    localStorage.setItem("user", JSON.stringify(form))
    
    // Formani tozalash
    setForm({
      name: "",
      email: "",
      userName: "",
      password: "",
      description: ""
    })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  return (
    <div className='wrapper'>
      <h2 className='title'>Create an account</h2>
      <p className="desc">Kindly fill the following details to create your account</p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder='Enter your full name...'
          />
        </div>
        <div>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder='Enter your email address...'
          />
        </div>
        <div>
          <input
            name="userName"
            value={form.userName}
            onChange={handleChange}
            type="text"
            placeholder='Enter your user name...'
          />
        </div>
        <div>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder='Enter your password...'
          />
        </div>
        <div>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder='Your Biography'
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
