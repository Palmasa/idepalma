module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "I. de Palma",
    description: "Personal website of Ines de Palma"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
