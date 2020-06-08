import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./car_model.module.scss"
import "../styles/bulmaStyles.scss"

export default ({ data }) => {
  return (
    <Layout>
      {data.allMysqlCars.edges.map(({ node }, i) => (
        <div className="container" key={i}>
          <div className="columns">
            <div className="column">
              <div className={styles.autoHeader}>
                <div>
                  <h1>Cotizaciones de seguro para
                    el {node.make ? node.make : ""} - {node.model ? node.model : ""} {node.car_trim ? node.car_trim : ""} {node.year ? node.year : ""}</h1>
                  <small>Auto Insurance Information</small>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumb is-small" aria-label="breadcrums">
            <ul>
              <li><a href="www.cotizaseguro.com">Home</a></li>
              <li className="active"><Link to={node.make ? node.make.replace(/ /g, "-") : ""}>{node.make || "NA"}</Link>
              </li>
              <li className="active"><Link
                to={node.make.replace(/ /g, "-") || "NA" + "-" + node.model.replace(/ /g, "-") || "NA"}>{node.model || "NA"}</Link>
              </li>
              <li className="active"><Link
                to={node.make.replace(/ /g, "-") || "NA" + "-" + node.model.replace(/ /g, "-") || "NA" + "-" + node.car_trim.replace(/ /g, "-") || "NA"}>{node.car_trim || "NA"}</Link>
              </li>
              <li className="active"><Link
                to={node.mysqlId || "NA" + "-" + node.make.replace(/ /g, "-") || "NA" + "-" + node.model.replace(/ /g, "-") || "NA" + "-" + node.car_trim.replace(/ /g, "-") || "NA" + "-" + node.year || "NA"}>{node.year}</Link>
              </li>
            </ul>
          </nav>

          <div className="columns">
            <div className="column">
              <img className="img-responsive" src={
                node.image ? node.image.split(";", 4)[0].split(",", 1) : ""
              }
                   alt={node.make || "NA" + " " + node.model || "NA"}/>
            </div>
            <div className="column">
              <h2>¿Cuánto cuesta asegurar
                mi {node.make || "NA"} - {node.model || "NA"} {node.car_trim || "NA"} {node.year || "NA"}</h2>
              <p>La información provista aquí es para identificar su marca y modelo de automóvil y ayudarlo a informarle
                sobre los costos del seguro. Los costos de cada marca y modelo de seguro pueden variar según el tamaño
                del
                motor, el costo del automóvil y muchos otros factores.

                Los principales factores involucrados en asegurar su automóvil son su historial de manejo, la frecuencia
                con la que maneja su automóvil, sus años de manejo y el automóvil en sí. Consulte la información a
                continuación para identificar su automóvil y luego haga clic para obtener una cotización de
                nosotros.</p>

            </div>
          </div>
          <div className="columns">
            <div className="column">
              <table className="table">
                <thead>
                <tr>
                  <th colSpan="2">Car Information</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Make</td>
                  <td>{node.make || "NA"}</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{node.model || "NA"}</td>
                </tr>
                <tr>
                  <td>Trim</td>
                  <td>{node.car_trim || "NA"}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{node.year || "NA"}</td>
                </tr>
                <tr>
                  <td>County of Origin</td>
                  <td>{node.country_origin || "NA"}</td>
                </tr>
                <tr>
                  <td>Car Classification</td>
                  <td>{node.classification || "NA"}</td>
                </tr>
                <tr>
                  <td>Engine Size (l)</td>
                  <td>{node.engine_size || "NA"}</td>
                </tr>
                <tr>
                  <td>Horsepower (HP)</td>
                  <td>{node.hp || "NA"}</td>
                </tr>
                <tr>
                  <td>Range (miles)</td>
                  <td>{node.range || "NA"}</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td>{node.doors || "NA"}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <table>
                <thead>
                <tr>
                  <th>Obten una cotizaci&oacute;n de estas compa&ntilde;&iacute;as:</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th>Geico</th>
                </tr>
                <tr>
                  <th>Erie</th>
                </tr>
                <tr>
                  <th>USAA</th>
                </tr>
                <tr>
                  <th>State Farm</th>
                </tr>
                <tr>
                  <th>Progressive</th>
                </tr>
                <tr>
                  <th>Nationwide</th>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={"container " + styles.well}>
            <div className="columns">
              <div className="column is-four-fifths">
                COMPARA EN LÍNEA DIFERENTES SEGUROS DE AUTO Y AHORRA HASTA UN 40% ANUAL EN TU PÓLIZA. Obtén un
                cupón de descuento de $300 para solicitar tu seguro.
              </div>
              <div className="column">
                <a className="button is-info is-large" href=" https://cotizaseguro.com/seguro-de-hogar/">
                  Cotiza Ahora!
                </a>
              </div>
            </div>
          </div>
          <div className={"columns " + styles.articles}>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img className="img-responsive"
                         src="https://cotizaseguro.com/wp-content/uploads/2020/01/NewLatinaComputerPhoto.jpg"
                         alt="Las Principales Evaluaciones Para Obtener Un Préstamo"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>Las principales evaluaciones para obtener un préstamo<br/>
                      <small>Hipoteca</small>
                    </h3>
                    <p>Solicitar un préstamo bancario puede parecer un concurso de belleza en donde nosotros somos los
                      participantes y el banco es el jurado calificador. ¿Cómo debo actuar?..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img className="img-responsive"
                         src="https://cotizaseguro.com/wp-content/uploads/2020/04/Screenshot-2020-04-16-at-07.07.40.png"
                         alt="Consejos para ahorrar en el seguro de tu auto"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>Consejos para ahorrar en el seguro de tu auto<br/>
                      <small>Ahorro</small>
                    </h3>
                    <p>En el siguiente post te aclaramos las dudas y te explicamos porqué debes comprar la póliza de
                      seguro que protegerá tu auto de cualquier accidente.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img className="img-responsive"
                         src="https://cotizaseguro.com/wp-content/uploads/2020/04/Screenshot-2020-04-16-at-07.21.23.png"
                         alt="Las Principales Evaluaciones Para Obtener Un Préstamo"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>Las principales evaluaciones para obtener un préstamo<br/>
                      <small>Hipoteca</small>
                    </h3>
                    <p>Si has mirado opciones de seguros para tu auto y necesitas ahorrar dinero, en el siguiente
                      artículo
                      presentamos varias soluciones para ti..</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
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
                  culpable no tiene suficiente seguro.</p><br/>
                <h4>No importa quién sea su asegurador, estos consejos pueden ayudarlo a ahorrar en su póliza:</h4>
                <br/>
                <ol>
                  <li><b>Busque descuentos</b> Incluso preguntar por ellos. Puede haber descuentos que no está
                    aprovechando. Por ejemplo, tal vez se retiró y maneja menos que cuando compró su póliza. Mencione
                    eso y podría obtener un descuento por bajo millaje. Solicite todos los descuentos disponibles cuando
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
                  <li><b>Aproveche los cambios importantes de la vida</b>. Ciertos eventos de la vida podrían traducirse
                    en un seguro de automóvil más barato, así que compre cotizaciones cada vez que algo importante
                    cambie en su vida. Por ejemplo, muchas compañías ofrecen una tarifa más baja para parejas casadas o
                    parejas domésticas. O tal vez te mudaste a un suburbio con tasas más bajas de accidentes y delitos.
                    Si su riesgo de accidentes disminuye, sus tarifas también podrían hacerlo.
                  </li>
                  <li><b>Revisar las comparaciones de cotizaciones de seguros.</b>Asegúrese de comprar cotizaciones de
                    seguros de automóviles justo después de los aniversarios de tres y cinco años de cualquier
                    accidente, multas o infracciones de tránsito, después de lo cual pueden eliminarse de su registro de
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
              <article>
                <h2>¿Cuál es el valor de mi auto?</h2>
                <p>El valor de tu auto depende de muchos
                  factores. Si lo vendes a otra persona por tu
                  cuenta, o si lo das como parte de pago,
                  tendrá precios diferentes. Para estimar el
                  valor de tu auto de manera correcta, te
                  recomendamos visitar <a href="https://www.edmunds.com/appraisal/">Edmunds.com</a></p>
              </article>
            </div>
          </div>
          <div className={"container " + styles.well}>
            <div className="columns">
              <div className="column is-four-fifths">
                COMPARA EN LÍNEA DIFERENTES SEGUROS DE AUTO Y AHORRA HASTA UN 40% ANUAL EN TU PÓLIZA. Obtén un
                cupón de descuento de $300 para solicitar tu seguro.
              </div>
              <div className="column">
                <a className="button is-info is-large" href=" https://cotizaseguro.com/seguro-de-hogar/">
                  Cotiza Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
    query($id: Int) {
        allMysqlCars(filter: {mysqlId: {eq: $id}}) {
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
