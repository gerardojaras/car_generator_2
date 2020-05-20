import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "../pages/makes.module.scss"
import { Link } from "gatsby"


const CarMake = ({ data }) => {
  return (
    <Layout>
      <div className={styles.makes}>
        <h2>Marcas de Automoviles</h2>
        {data.allMysqlCars.distinct.map((carMakes, i) => (
          <div key={i} className={styles.makeLink}>
            <Link to={carMakes}>
              {carMakes}
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
        allMysqlCars(filter: {make: {eq: $displayMake}}) {
            distinct(field: model)
        }
    }
`
