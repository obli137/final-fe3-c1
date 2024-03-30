import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setList(res.data)
    );
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {list.map((dentist) => (
          <Card key={dentist.id} item={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
