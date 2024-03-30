import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const params = useParams();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + params.id).then(
      (res) => setDentist(res.data)
    );
  }, [params.id]);

  return (
    <>
      <h1>Detail Dentist id {dentist.id}</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
