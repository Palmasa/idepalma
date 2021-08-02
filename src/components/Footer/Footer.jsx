import React from 'react'
import { AiFillGithub } from 'react-icons/ai' 
import { AiFillLinkedin } from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">

      <a href="https://github.com/Palmasa" target="_blank" rel="noreferrer" className="footer__item">
        <AiFillGithub fontSize="1.7em" color="#303546"/>
      </a>

      <a href="https://www.linkedin.com/in/ines-de-palma-masaveu/" target="_blank" rel="noreferrer" className="footer__item">
        <AiFillLinkedin fontSize="1.7em" color="#303546"/>
      </a>

    </div>
  )
}

export default Footer
