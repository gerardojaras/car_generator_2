import React from "react"
import Layout from "../components/layout"
import styles from "../pages/makes.module.scss"
import { graphql, Link } from "gatsby"

const CarTrim = ({data}) =>{
  return(
    <Layout>
      <div className={styles.makes}>
        <h2>Estilos para el {data.allMysqlTrims.edges[0].node.make + "-" + data.allMysqlTrims.edges[0].node.model}</h2>
        {data.allMysqlTrims.edges.map((carTrims, i) => (
          <div key={i} className={styles.makeLink}>
            <Link to={carTrims.node.make.replace(/ /g, "-") + "-" + carTrims.node.model.replace(/ /g, "-") + "-" + carTrims.node.car_trim.replace(/ /g, "-")}>
              {carTrims.node.car_trim}
            </Link>
          </div>
        ))}

      </div>
      ))}
    </Layout>
  )
}

export default CarTrim

export const trim = graphql`
  query($displayMake: String, $displayModel: String)
  {
      allMysqlTrims(filter: {make: {eq: $displayMake}, model: {eq: $displayModel}}) {
          edges {
              node {
                  make
                  model
                  car_trim
              }
          }
      }
  }
`