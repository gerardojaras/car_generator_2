import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <section id="pageContent">
        <h1><strong>MAKE! MODEL! Car Insurance Rates & Quotes</strong></h1>
      </section>
      <section id="pageContent">
        <main role="main">
          {data.allMysqlCars.edges.map(({ node }, i) => (
            <div key={i}>
              <article>
                <h2>
                  ¿Cuánto cuesta asegurar mi
                  <span dangerouslySetInnerHTML={{ __html: node.make }}/>
                  <span dangerouslySetInnerHTML={{ __html: node.model }}/>
                  <span dangerouslySetInnerHTML={{ __html: node.trim }}/>
                </h2>
              </article>


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
              <article>
                <h2>What is my MAKE! MODEL! worth?</h2>
                <p>What your car is worth depends on many factors like whether you are selling it private party or
                  trading
                  it in. To best estimate the value of your car we recommend going to <a
                    href="https://www.edmunds.com/appraisal/">Edmunds.com</a></p>
              </article>
            </div>
          ))}
        </main>
      </section>
      <aside>
        <div><br/>
          <div style={{ "textAlign": "center" }}><img src="carinsurance.png" height="170" alt="YEAR!MAKE!MODEL!"/>
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
