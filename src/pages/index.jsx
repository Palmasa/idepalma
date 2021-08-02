import React from "react"
import Layout from "../layout/Layout"
import { StaticImage } from "gatsby-plugin-image";
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className="Index">

        <div className="index__text">
          <h1>Inés de Palma Masaveu</h1>
          <p>A really really cool punchline that means something thrive</p>
        </div>

        <div className="index__img">
          <div className="index__img__container">
            <StaticImage
              className="index__img__profile"
              src="../images/perfil.jpeg"
              alt="Attomo"
              placeholder="blur"
            />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default IndexPage
