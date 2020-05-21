import React from "react"
import Layout from "../components/layout"
import styles from "./makes.module.scss"
import { graphql, Link } from "gatsby"

const Makes = ({ data }) => {
  return (
    <Layout>


      <div className={styles.makes}>
        <h2>Marcas de Automoviles</h2>
        {data.allMysqlMakes.distinct.map((carMakes, i) => (
          <div key={i} className={styles.makeLink}>
            <Link to={carMakes.replace(/ /g, "-")}>
              {carMakes}
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
            distinct(field: make)
        }
    }
`
