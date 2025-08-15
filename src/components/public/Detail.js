//rafc
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { useEffect, useState } from 'react/cjs/react.development';
import RickAndMortyServices from "../../services/RickAndMorty.service";

const Detail = () => {
  const [mascota, setMascota] = useState({});

  const { id } = useParams();

  useEffect(() => {
    RickAndMortyServices.getCharactersById(id).then((data) => setMascota(data))
    //aca se colocan las variables a escuchar
  }, [])

  console.log(mascota);

  const detailCard = {
    width: "80%",
    margin: "auto",
    background: "white",
  };

  return (
    <div className="margin-200">
      <div className="card mb-3" style={{ background: "gainsboro" }}>
        <div className="row g-0 mt-4 mb-4" style={detailCard}>
          <div className="col-md-3">
            <img
              src={mascota.image}
              className="img-fluid rounded-start imgDetalle"
              alt="img del personaje"
            />
          </div>
          <div className="col-md-8 detallePersonaje">
            <div className="card-body">
              <h3 className="card-title">{mascota.name}</h3>
              <h5 className="card-text">
                <small className=""><strong>Especie: </strong> {mascota.species}</small>
              </h5>
              <h5 className="card-text">
                <small className=""><strong>Estado: </strong> {mascota.status}</small>
              </h5>
              <h5 className="card-text">
                <small className=""><strong>Genero: </strong> {mascota.gender}</small>
              </h5>
              <h5 className="card-text">
                <small className=""><strong>Fecha Creación: </strong> {mascota.created}</small>
              </h5>
            </div>
            <div className="btn-group" style={{ marginLeft: "15px", marginBottom: "15px" }}>
              <button type="button" className="btn btn-dark my-2">
                <Link to={"/"} className="nav-link px-2 text-white">
                  Inicio
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
