import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Styles from "./car_model.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <section id="main" className={Styles.main}>
        {data.allMysqlCars.edges.map(({node}, i) => (
              <div key={i} className={Styles.features}>
                <div className={Styles.feature}><div className={Styles.feature_title}>Id:</div> <div dangerouslySetInnerHTML={{__html: node.mysqlId}} className={Styles.feature_value}/></div>
                <div className={Styles.feature}><div className={Styles.feature_title}>Make:</div> <div dangerouslySetInnerHTML={{__html: node.make}} className={Styles.feature_value}/></div>
                <div className={Styles.feature}><div className={Styles.feature_title}>Model:</div> <div dangerouslySetInnerHTML={{__html: node.model}} className={Styles.feature_value}/></div>
                <div className={Styles.feature}><div className={Styles.feature_title}>Trim:</div> <div dangerouslySetInnerHTML={{__html: node.trim}} className={Styles.feature_value}/></div>
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Body:</div> <div dangerouslySetInnerHTML={{__html: node.body}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Body Type:</div> <div dangerouslySetInnerHTML={{__html: node.body_type}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Entertainment:</div> <div dangerouslySetInnerHTML={{__html: node.car_entertaiment}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Classification:</div> <div dangerouslySetInnerHTML={{__html: node.classification}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Colors:</div>*/}
                  {/*<div className={Styles.feature_value}>*/}
                  {/*  {node.colors.split(';').map((color, i) =>(*/}
                  {/*    <div key={i}>{color}</div>*/}
                  {/*  ))}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Combined MPG:</div> <div dangerouslySetInnerHTML={{__html: node.combined_mpg}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Comfort:</div> <div dangerouslySetInnerHTML={{__html: node.comfort}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Convenience:</div> <div dangerouslySetInnerHTML={{__html: node.convenience}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Country of Origin:</div> <div dangerouslySetInnerHTML={{__html: node.country_origin}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Number of Cylinders:</div> <div dangerouslySetInnerHTML={{__html: node.cylinders}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Domestic Imported:</div> <div dangerouslySetInnerHTML={{__html: node.domestic_imported}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Doors:</div> <div dangerouslySetInnerHTML={{__html: node.doors}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Drive Type:</div> <div dangerouslySetInnerHTML={{__html: node.drive_type}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Engine Size:</div> <div dangerouslySetInnerHTML={{__html: node.engine_size}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Engine Type:</div> <div dangerouslySetInnerHTML={{__html: node.engine_type}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>EPA Millage:</div> <div dangerouslySetInnerHTML={{__html: node.epa_millage}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Front Seats:</div> <div dangerouslySetInnerHTML={{__html: node.front_seats}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Fuel Type:</div> <div dangerouslySetInnerHTML={{__html: node.fuel_type}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Horse Power:</div> <div dangerouslySetInnerHTML={{__html: node.hp}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Image:</div> <div dangerouslySetInnerHTML={{__html: node.image}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Instrumentation:</div> <div dangerouslySetInnerHTML={{__html: node.instrumentation}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Interior Color:</div>*/}
                {/*  <div dangerouslySetInnerHTML={{__html: node.interior_colors}} className={Styles.feature_value}/>*/}
                {/*</div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Memorized Seats:</div> <div dangerouslySetInnerHTML={{__html: node.memorized_seats}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Power Features:</div> <div dangerouslySetInnerHTML={{__html: node.power_features}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Price:</div> <div dangerouslySetInnerHTML={{__html: node.price}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Range:</div> <div dangerouslySetInnerHTML={{__html: node.range}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Rear Seats:</div> <div dangerouslySetInnerHTML={{__html: node.rear_seats}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Roof Glass:</div> <div dangerouslySetInnerHTML={{__html: node.roof_glass}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Safety Features:</div> <div dangerouslySetInnerHTML={{__html: node.safety_features}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Tires & Wheels:</div> <div dangerouslySetInnerHTML={{__html: node.tires_wheels}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Towing & Hauling:</div> <div dangerouslySetInnerHTML={{__html: node.towing_hauling}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Torque:</div> <div dangerouslySetInnerHTML={{__html: node.tq}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Transmission:</div> <div dangerouslySetInnerHTML={{__html: node.transmission}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Truck Features:</div> <div dangerouslySetInnerHTML={{__html: node.truck_features}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Valves:</div> <div dangerouslySetInnerHTML={{__html: node.valves}} className={Styles.feature_value}/></div>*/}
                {/*<div className={Styles.feature}><div className={Styles.feature_title}>Year:</div> <div dangerouslySetInnerHTML={{__html: node.year}} className={Styles.feature_value}/></div>*/}
              </div>
          )
        )}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($id: Int) {
    allMysqlCars(limit: 10, filter: {mysqlId: {eq: $id}}) {
      edges {
        node {
          mysqlId
          make
          model
          trim
        }
      }
    }
  }
`
