import React from "react"
import { useStaticQuery } from "gatsby"

const BrandSelector = () => {
  const brands = useStaticQuery(graphql`
      query {
          allMysqlMakes {
              edges {
                  node {
                      id
                      make
                  }
              }
          }
      }
  `)
  return (
    <select>
      <option>Select Brand</option>
      {brands.allMysqlMakes.edges.map((node, i) => (
        <option key={i}>
          {node.node.make}
        </option>
      ))}
    </select>
  )
}

export default BrandSelector
