import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
  
      <div className="contactRight">
        <h1>Contact US</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter Full Name ..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter Email ..." type="text"></input>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Message..."
            required
          ></textarea>
          
        </form>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact