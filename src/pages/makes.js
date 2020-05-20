import React from "react"
import Layout from "../components/layout"
import styles from "./makes.module.scss"
import { Link } from "gatsby"

const Makes = ({ data }) => {
  return (
    <Layout>


      <div className={styles.makes}>
        <h2>Marcas de Automoviles</h2>
        {data.allMysqlMakes.edges.map((carMakes, i) => (
          <div key={i} className={styles.makeLink}>
            <Link to={carMakes.node.make}>
              {carMakes.node.make}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Makes

export const makes = graphql`
    query{
        allMysqlMakes {
            edges {
                node {
                    make
                }
            }
        }
    }
`
