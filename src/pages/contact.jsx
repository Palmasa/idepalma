import React from 'react'
import Layout from '../layout/Layout'
import '../styles/contact.scss'

const contact = () => {
  return (
    <Layout>
      <div className="Contact">
        <div className="Contact__color">
          <h1>CONTACT ME</h1>
          
          <form content-type="application/x-www-form-urlencoded" name="contactMe" method="POST" data-netlify="true">

            <label>
              Contact
              <input type="text" name="contactInfo" />
            </label>

            <label>
              Message:
              <textarea name="messageSent"></textarea>
            </label>

            <button type="submit">Send</button>

          </form>

        </div>
      </div>
    </Layout>
  )
}

export default contact
