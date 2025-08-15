// rfc = react funtional component: crea una constante llamada footer
// que es una funcion flecha que retorna una porcion de codigo (en este caso un div)

import React, { useState } from "react";

const Footer = () => {
  //Creamos el hook
  //React nos permite manejar variables
  // Partes del useState. Una constante, abre un array [variable, funcionalidad encargada de cambiar la variable]
  // entre parentesis va el valor inicial

  const year = new Date().getFullYear();

  const companyName = "elavinchodev";

  return (
    <div className="p-3">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; {year} {companyName}
        </p>
      
        <ul className="nav col-8 justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
