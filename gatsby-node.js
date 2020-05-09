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
    }
  `).then(result => {
    console.log(result)
    result.data.cars.edges.forEach(({ node }) => {
      createPage({
        path: node.mysqlId + "-" + node.make.replace(/ /g, "-") + "-" + node.model.replace(/ /g, "-") + "-" + node.car_trim.replace(/ /g, "-") + "-" + node.year,
        //path: node.mysqlId + "-" + node.make + "-" + node.model + "-" + node.car_trim,
        component: path.resolve(`./src/templates/car_model.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.mysqlId
        }
      })
    })
  })
}
