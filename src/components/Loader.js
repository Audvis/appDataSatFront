// src/components/Loader.js
import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="text-center my-4">
      <Spinner animation="border" role="status" />
      <p>Cargando datos...</p>
    </div>
  );
};

export default Loader;
