import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "./car_model.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      {data.allMysqlCars.edges.map(({ node }, i) => (
        <div key={i} className={styles.main}>
          <h1 className={styles.title}><strong><span dangerouslySetInnerHTML={{ __html: node.make }}/> <span
            dangerouslySetInnerHTML={{ __html: node.model }}/> </strong></h1>
          <h2>
            ¿Cuánto cuesta asegurar mi <span dangerouslySetInnerHTML={{ __html: node.make }}/> <span
            dangerouslySetInnerHTML={{ __html: node.model }}/> <span
            dangerouslySetInnerHTML={{ __html: node.car_trim }}/>?
          </h2>
          <div className={styles.car_information}>
            <div className={styles.info}>
              <table className={styles.table}>
                <tr>
                  <th colSpan="2">Car Information</th>
                </tr>
                <tr>
                  <td className={styles.title}>Make</td>
                  <td className={styles.content}><span dangerouslySetInnerHTML={{ __html: node.make }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Model</td>
                  <td className="tg-ly6r"><span dangerouslySetInnerHTML={{ __html: node.model }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Year</td>
                  <td className="tg-ly6r"><span dangerouslySetInnerHTML={{ __html: node.year }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Average Annual Insurance Cost</td>
                  <td>Not Available</td>
                </tr>
                <tr>
                  <td className={styles.title}>County of Origin</td>
                  <td><span dangerouslySetInnerHTML={{ __html: node.country_origin }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Car Classification</td>
                  <td><span dangerouslySetInnerHTML={{ __html: node.classification }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Engine Size (l)</td>
                  <td><span dangerouslySetInnerHTML={{ __html: node.engine_size }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Horsepower (HP)</td>
                  <td><span dangerouslySetInnerHTML={{ __html: node.hp }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Range (miles)</td>
                  <td><span dangerouslySetInnerHTML={{ __html: node.range }}/></td>
                </tr>
                <tr>
                  <td className={styles.title}>Country of Origin</td>
                  <td><span dangerouslySetInnerHTML={{ __html: node.country_origin }}/></td>
                </tr>
              </table>


              <br/>

              <article>
                <h2>¿Cuál es la compañía de seguros de automóviles más barata?</h2>
                <p>Siete compañías de seguros de automóviles representan más del 65% del mercado estadounidense de
                  pólizas
                  de automóviles individuales. Son Allstate, Farmers, Geico, Liberty Mutual, Progressive y State Farm.
                  Dependiendo de su ubicación, la compañía de seguros de automóviles más asequible varía. Encontrar un
                  seguro de automóvil barato no significa que tenga que quedarse con grandes compañías de seguros.</p>
                <p>Las aseguradoras regionales pueden superar las tasas de seguro de automóvil más bajas de las grandes
                  corporaciones y, a menudo, tienen un excelente servicio al cliente. El seguro de automóvil más barato,
                  punto, probablemente tendrá la cobertura mínima requerida en su estado. En la mayoría de los estados,
                  este es solo un seguro de responsabilidad civil, que cubre daños a la propiedad y facturas médicas de
                  terceros debido a accidentes que usted cause. Algunos estados también requieren cobertura de
                  automovilista sin seguro o con seguro insuficiente, que paga sus lesiones o daños si un conductor
                  culpable no tiene suficiente seguro.</p>
                <br/>
                <h4>No importa quién sea su asegurador, estos consejos pueden ayudarlo a ahorrar en su póliza:</h4>

                <br/>
                <ol>
                  <li><b>Busque descuentos</b> Incluso preguntar por ellos. Puede haber descuentos que no está
                    aprovechando. Por ejemplo, tal vez se retiró y maneja menos que cuando compró su póliza. Mencione
                    eso y podría obtener un descuento por bajo millaje. Solicite todos los descuentos disponibles
                    cuando
                    obtenga cotizaciones de seguros de automóviles.
                  </li>
                  <li><b>Reconsidere los límites y deducibles del seguro.</b>Una colisión más alta y un deducible
                    integral podrían tener sentido si rara vez conduce o se siente cómodo con el riesgo financiero.
                    Aumentar su deducible significa que debe más de su bolsillo si tuviera que presentar un reclamo
                    integral o por colisión, pero es una forma segura de obtener un seguro de automóvil más barato.
                  </li>
                  <li><b>Sepa cuándo cortar la cobertura. </b>No elimine la cobertura solo por el seguro más barato.
                    Necesitará un seguro de automóvil de cobertura total para satisfacer los términos de un préstamo
                    para automóviles, y lo querrá siempre y cuando su automóvil sea una carga financiera para
                    reemplazar. Pero para los automóviles más antiguos, puede eliminar la cobertura integral y de
                    colisión, que solo paga hasta el valor actual de su automóvil, menos el deducible.
                  </li>
                  <li><b>Aproveche los cambios importantes de la vida</b>. Ciertos eventos de la vida podrían
                    traducirse
                    en un seguro de automóvil más barato, así que compre cotizaciones cada vez que algo importante
                    cambie en su vida. Por ejemplo, muchas compañías ofrecen una tarifa más baja para parejas casadas
                    o
                    parejas domésticas. O tal vez te mudaste a un suburbio con tasas más bajas de accidentes y
                    delitos.
                    Si su riesgo de accidentes disminuye, sus tarifas también podrían hacerlo.
                  </li>
                  <li><b>Revisar las comparaciones de cotizaciones de seguros.</b>Asegúrese de comprar cotizaciones de
                    seguros de automóviles justo después de los aniversarios de tres y cinco años de cualquier
                    accidente, multas o infracciones de tránsito, después de lo cual pueden eliminarse de su registro
                    de
                    manejo.
                  </li>
                </ol>

              </article>
              <article>
                <h2>¿Cuál es el costo promedio anual de este automóvil?</h2>
                <p>Los costos del seguro de automóvil varían ampliamente según los factores de calificación
                  individuales.
                  La historia del solicitante, la marca y modelo del automóvil, la edad del automóvil, incluso el tamaño
                  del motor del automóvil siguen siendo factores en el costo de asegurar su automóvil.</p>
              </article>

            </div>
            <aside>
              <div><br/>
                <div style={{ "textAlign": "center" }}>
                  <img src={node.image.split(";", 2)[1].split(",", 1)}/>
                </div>
              </div>
              <div>
                <a href="http://cotizaseguro.com/medical-insurance/" target="_blank" rel="noopener noreferrer">
                  <div style={{ "textAlign": "center" }}>Health Insurance</div>
                </a>
              </div>
              <div>
                <a href="https://www.cotizaseguro.com/health" target="_blank" style={{ "textAlign": "center" }}
                   rel="noopener noreferrer">
                  Home Insurance
                </a>
              </div>
              <div>
                <a href="http://cotizaseguro.com/life-insurance/" target="_blank" rel="noopener noreferrer"><br/>
                  <div style={{ "textAlign": "center" }}>Life Insurance</div>
                </a>
              </div>
            </aside>
          </div>

        </div>
      ))}
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
                    car_trim
                    year
                    country_origin
                    classification
                    engine_size
                    hp
                    country_origin
                    range
                    doors
                    image
                }
            }
        }
    }
`
