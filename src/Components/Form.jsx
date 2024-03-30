import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario:", formData);

    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <h2>Gracias por contactarnos. Lo estaremos contactando</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
