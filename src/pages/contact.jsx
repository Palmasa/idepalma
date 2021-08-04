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

          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: </label>   
              <input type="text" name="name" />
            </p>
            <p>
              <label>Your Email: </label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Message: </label>
              <textarea name="message"></textarea>
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
