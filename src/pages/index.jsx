import React from "react"
import Layout from "../layout/Layout"
import { StaticImage } from "gatsby-plugin-image";
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className="Index">

        <div className="Index__text">
          <h1>Inés de Palma Masaveu</h1>
          <p>Product Owner by day, developer at night</p>
        </div>

        <div className="Index__img">
          <div className="Index__img__container">
            <StaticImage
              className="Index__img__container__profile"
              src="../images/perfil.jpeg"
              alt="Inés"
              placeholder="blur"
            />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default IndexPage
