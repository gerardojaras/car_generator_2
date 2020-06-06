import React from "react"

const Footer = () => {
  return (
    <>
      <hr/>
      <footer>
        <div className="columns">
          <div className="column">
            <p>Copyright &copy; Cotizaseguro, {(new Date().getFullYear())}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
