import React from 'react'
import Layout from '../layout/Layout'
import '../styles/contact.scss'

const contact = () => {
  return (
    <Layout>
      <div className="Contact">
        <div className="Contact__color">
          <p>Inés de Palma Masaveu</p>
          <p>ipalmamasaveu@gmail.com</p>
          <form name="contact" method="POST" data-netlify="true" action="/projects">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default contact
