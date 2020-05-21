import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styles from "../pages/makes.module.scss"


const CarMake = ({ data }) => {
  return (
    <Layout>
      <div className={styles.makes}>
        <h2>Modelos para el {data.allMysqlMakes.edges[0].node.make} - {data.allMysqlMakes.edges[0].node.model}</h2>
        {data.allMysqlMakes.edges.map((carModels, i) => (
          <div key={i} className={styles.makeLink}>
            <Link to={carModels.node.make.replace(/ /g, "-") + "-" + carModels.node.model.replace(/ /g, "-")}>
              {carModels.node.model}
            </Link>
          </div>
        ))}

      </div>
      ))}
    </Layout>
  )
}

export default CarMake

export const make = graphql`
    query($displayMake: String) {
        allMysqlMakes(filter: {make: {eq: $displayMake}}) {
            edges {
                node {
                    make
                    model
                }
            }
        }
    }
`
