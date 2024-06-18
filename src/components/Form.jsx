import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form>
        <h1>Send a message to us!</h1>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Subject'/>
        <textarea placeholder='Message' rows={4}></textarea>
        <button>Send Message</button>
    </form>
  )
}

export default Form