import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context";

const Card = ({ item }) => {
  const { setFavs } = useDentistStates();
  console.log(item);
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((prevState) => [...prevState, item]);
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
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
