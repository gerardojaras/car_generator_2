const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      cars: allMysqlCars{
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
      makes: allMysqlMakes {
        edges {
          node {
            make
            model
          }
        }
      }
      trims: allMysqlTrims {
        edges {
          node {
            id
            car_trim
            make
            model
          }
        }
      }
      years: allMysqlYears {
        edges {
          node {
            car_trim
            make
            model
            mysqlId
            year
          }
        }
      }
    }
  `).then(result => {
    result.data.cars.edges.forEach(({ node }) => {
      createPage({
        path: node.mysqlId + "-" + node.make.replace(/ /g, "-") + "-" + node.model.replace(/ /g, "-") + "-" + node.car_trim.replace(/ /g, "-") + "-" + node.year,
        component: path.resolve(`./src/templates/car_model.js`),
        context: {
          id: node.mysqlId
        }
      })
    })
    result.data.makes.edges.forEach(
      ({ node }) => {
        createPage({
          path: node.make,
          component: path.resolve(`./src/templates/car_make.js`),
          context: {
            displayMake: node.make,
            displayModel: node.model
          }
        })
      }
    )
    result.data.trims.edges.forEach(
      ({ node }) => {
        createPage({
          path: node.make + "-" + node.model.replace(/ /g, "-"),
          component: path.resolve(`./src/templates/car_trim.js`),
          context: {
            displayMake: node.make,
            displayModel: node.model
          }
        })
      }
    )
    result.data.years.edges.forEach(
      ({node}) =>{
        createPage({
          path: node.make + "-" + node.model.replace(/ /g, "-") + "-" + node.car_trim.replace(/ /g, "-"),
          component: path.resolve(`./src/templates/car_year.js`),
          context: {
            displayMake: node.make,
            displayModel: node.model,
            displayTrim: node.car_trim
          }
        })
      }
    )
  })
}
