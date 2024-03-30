import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context";

const Card = ({ item }) => {
  const { setFavs } = useDentistStates();
  console.log(item);

  const addFav = () => {
    // Guardar la tarjeta en localStorage
    const favsFromStorage = JSON.parse(localStorage.getItem("favs")) || [];
    const updatedFavs = [...favsFromStorage, item];
    localStorage.setItem("favs", JSON.stringify(updatedFavs));

    // Actualizar el estado con setFavs
    setFavs(updatedFavs);
  };

  return (
    <div className="card">
      <Link to={"/detail/" + item.id}>
        <div>
          <img src="/public/images/doctor.jpg" alt="dentist-image" />
          <h3>{item.name}</h3>
          <h5>{item.username}</h5>
          <h6>{item.id}</h6>
        </div>
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
