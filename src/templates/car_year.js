import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styles from "../pages/makes.module.scss"

const CarYears = ({data}) =>{
  return(
    <Layout>
      <div className={styles.makes}>
        <h2>A&ntilde;os para el {data.allMysqlYears.edges[0].node.make + "-" + data.allMysqlYears.edges[0].node.model + "-" + data.allMysqlYears.edges[0].node.car_trim}</h2>
        {data.allMysqlYears.edges.map((carYears, i) => (
          <div key={i} className={styles.makeLink}>
            <Link to={carYears.node.mysqlId + "-" + carYears.node.make.replace(/ /g, "-") + "-" + carYears.node.model.replace(/ /g, "-") + "-" + carYears.node.car_trim.replace(/ /g, "-") + "-" + carYears.node.year.toString().replace(/ /g, "-")}>
              {carYears.node.year}
            </Link>
          </div>
        ))}

      </div>
      ))}
    </Layout>
  )
}

export default CarYears

export const years = graphql`
    query($displayMake: String, $displayModel: String, $displayTrim: String)
    {
        allMysqlYears(filter: {make: {eq: $displayMake}, model: {eq: $displayModel}, car_trim: {eq: $displayTrim}}) {
            edges {
                node {
                    mysqlId
                    car_trim
                    make
                    model
                    mysqlId
                    year
                }
            }
        }
    }
`


