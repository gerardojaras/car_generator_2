module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
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
            statement: "select * from cars_models_trims where make is not null limit 10",
            idFieldName: "id",
            name: "cars"
          },
          {
            statement: "select id, make, model from cars_models_trims where make is not null group by make, model limit 10",
            idFieldName: "id",
            name: "makes"
          },
          {
            statement: "select id, make, model, car_trim from cars_models_trims where make is not null group by make, model, car_trim limit 10",
            idFieldName: "id",
            name: "trims"
          },
          {
            statement: "select id, make, model, car_trim, year from cars_models_trims where make is not null group by make, model, car_trim, year limit 10",
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
