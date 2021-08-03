import React from 'react'
import { AiFillGithub } from 'react-icons/ai' 
import { AiFillLinkedin } from 'react-icons/ai'
import { GrDocument } from 'react-icons/gr'
import cv from "../../../public/CV_Ines_de_Palma.pdf"
import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">

      <a href="https://github.com/Palmasa" target="_blank" rel="noreferrer" className="Footer__item">
        <AiFillGithub fontSize="1.7em" color="#303546"/>
      </a>

      <a href="https://www.linkedin.com/in/ines-de-palma-masaveu/" target="_blank" rel="noreferrer" className="Footer__item">
        <AiFillLinkedin fontSize="1.7em" color="#303546"/>
      </a>

      <a href={cv} download target="_blank"  rel="noreferrer" className="Footer__item">
        <GrDocument fontSize="1.4em" color="#303546"/>
        <p className="Footer__item__cv">cv</p>
      </a>

    </div>
  )
}

export default Footer
