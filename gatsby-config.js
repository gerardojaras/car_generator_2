module.exports = {
  siteMetadata: {
    title: `Cotiza Seguro`,
    description: `Compara y compra seguros de vehiculos`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5MR9JXM",
        includeInDevelopment: true
      }
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: "192.168.10.10",
          user: "homestead",
          password: "secret",
          database: "car-generation"
        },
        queries: [
          {
            statement: "select id, make, model, car_trim, year, classification, 'engine-size', hp, 'country-origin', doors, image, `range` from cars_models_trims where make is not null",
            idFieldName: "id",
            name: "cars"
          },
          {
            statement: "select id, make, model from cars_models_trims where make is not null group by make, model",
            idFieldName: "id",
            name: "makes"
          },
          {
            statement: "select id, make, model, car_trim from cars_models_trims where make is not null group by make, model, car_trim",
            idFieldName: "id",
            name: "trims"
          },
          {
            statement: "select id, make, model, car_trim, year from cars_models_trims where make is not null group by make, model, car_trim, year",
            idFieldName: "id",
            name: "years"
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Costiza Seguro`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
