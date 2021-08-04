import React from 'react'
import Layout from '../layout/Layout'
import DogVideo from '../../src/videos/el-mercado.mp4'
import '../styles/projects.scss'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Projects = () => {

  return (
    <Layout>
      <div className="Projects">

        <a className="Projects__card" href="https://m.el-mercado.es/productos" target="_blank" rel="noreferrer">
          <ProjectCard 
            title="El Mercado"
            subtitle="MERN Application"
            description="something goes here"
            videoId="el-mercado"
            videoUrl={DogVideo}
            bcColor="#7FA9B9"
          />
        </a>

        <a className="Projects__card" href="#" target="_blank" rel="noreferrer">
          <ProjectCard 
            title="Rebuelta Domecq"
            subtitle="JAMStack - Gatsby & Contentful"
            description="something else here"
            videoId="EstudioRD"
            videoUrl={DogVideo}
            bcColor="#4F8296"
          />
        </a>

        <a className="Projects__card" href="https://thecoopspain.herokuapp.com/" target="_blank" rel="noreferrer">
          <ProjectCard 
            title="Coop"
            subtitle="SSR Web Application"
            description="othe description here"
            videoId="Coop"
            videoUrl={DogVideo}
            bcColor="#1D556A"
          />
        </a>

      </div>
    </Layout>
  )
}

export default Projects
