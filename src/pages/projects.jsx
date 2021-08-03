import React from 'react'
import Layout from '../layout/Layout'
import '../styles/projects.scss'
import DogVideo from '../../src/videos/el-mercado.mp4'

const Projects = () => {

  const playVideo = (id) => {
    if (document) {
      const video = document.querySelector(id)
      video.play();
    }
  }
  const stopVideo = (id) => {
    if (document) {
      const video = document.querySelector(id)
      video.pause();
    }
  }

  return (
    <Layout>
      <div className="Projects">

        <a  className="Projects__main" href="https://m.el-mercado.es/productos" target="_blank" rel="noreferrer">
          <h1>El Mercado</h1>
          <p>MERN Application</p>
          <video id="video__main" onMouseOver={() => playVideo("#video__main")} onMouseOut={() => stopVideo("#video__main")}  loop muted className="cosa">
            <source src={DogVideo} type="video/mp4" />
          </video>
        </a>

        <div className="Projects__secondary">

          <a className="Projects__secondary__top" href="#" target="_blank" rel="noreferrer">
            <h1>Estudio Rebuelta Domecq</h1>
            <p>JAMStack - Gatsby & Contentful</p>
          </a>

          <a className="Projects__secondary__bottom" href="https://thecoopspain.herokuapp.com/" target="_blank" rel="noreferrer">
            <h1>Coop</h1>
            <p>SSR Web Application</p>
          </a>

        </div>
      </div>
    </Layout>
  )
}

export default Projects
