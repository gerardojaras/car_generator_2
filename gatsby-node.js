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
          }
        }
      }
    }
  `).then(result => {
    result.data.cars.edges.forEach(({ node }) => {
      createPage({
        //path: node.mysqlId + "-" + node.make.replace(/ /g, "-") + "-" + node.model.replace(/ /g, "-") + "-" + node.trim.replace(/ /g, "-"),
        path: node.mysqlId + "-" + node.make + "-" + node.model,
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
