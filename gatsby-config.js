module.exports = {
  siteMetadata: {
    title: `Cotiza Seguro`,
    description: `Compara y compra seguros de vehiculos`,
    author: `Gerardo Jaramillo`,
    siteUrl: `https://autos.cotizaseguro.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/`,
          `/AM General`,
          `/Acura`,
          `/Alfa Romeo`,
          `/Aston Martin`,
          `/Audi`,
          `/BMW`,
          `/Bentley`,
          `/Bugatti`,
          `/Buick`,
          `/Cadillac`,
          `/Chevrolet`,
          `/Chrysler`,
          `/Daewoo`,
          `/Dodge`,
          `/Eagle`,
          `/FIAT`,
          `/Ferrari`,
          `/Fisker`,
          `/Ford`,
          `/GMC`,
          `/Genesis`,
          `/Geo`,
          `/HUMMER`,
          `/Honda`,
          `/Hyundai`,
          `/INFINITI`,
          `/Isuzu`,
          `/Jaguar`,
          `/Jeep`,
          `/Kia`,
          `/Lamborghini`,
          `/Land Rover`,
          `/Lexus`,
          `/Lincoln`,
          `/Lotus`,
          `/MINI`,
          `/Maserati`,
          `/Maybach`,
          `/Mazda`,
          `/McLaren`,
          `/Mercedes-Benz`,
          `/Mercury`,
          `/Mitsubishi`,
          `/Nissan`,
          `/Oldsmobile`,
          `/Panoz`,
          `/Plymouth`,
          `/Pontiac`,
          `/Porsche`,
          `/Ram`,
          `/Rolls-Royce`,
          `/Saab`,
          `/Saturn`,
          `/Scion`,
          `/Spyker`,
          `/Subaru`,
          `/Suzuki`,
          `/Tesla`,
          `/Toyota`,
          `/Volkswagen`,
          `/Volvo`,
          `/smart`,
          `/404`,
          `/404.html`,
          `/dev-404-page`
        ],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
          
          allMysqlCars{
            edges {
              node {
                mysqlId
                make
                model
                car_trim
                year
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage, allMysqlCars }) => {
          let pages = []
          allMysqlCars.edges.forEach(({ node }) => {
            pages.push({
              url: site.siteMetadata.siteUrl + node.mysqlId + "-" + node.make.replace(/ /g, "-") + "-" + node.model.replace(/ /g, "-") + "-" + node.car_trim.replace(/ /g, "-") + "-" + node.year,
              changefreq: `daily`,
              priority: 0.7
            })
          })
          return pages
        }
      }
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carimages`,
        path: `${__dirname}/src/images/cars`
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
