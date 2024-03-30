import Card from "../Components/Card";
import { useDentistStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useDentistStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favs.map((fav) => (
          <Card key={fav.id} item={fav} />
        ))}
      </div>
    </>
  );
};

export default Favs;
