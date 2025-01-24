// src/components/Buttons.js
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Buttons = ({ onDownload, onDelete }) => {
  const handleDownload = () => {
    axios
      .get('http://127.0.0.1:5001/download_csv')  // Ajusta la URL según tu backend
      .then((response) => {
        alert('Archivo descargado y guardado correctamente');
        onDownload();
      })
      .catch((error) => {
        alert('Error al descargar o guardar el archivo');
      });
  };

  const handleDelete = () => {
    axios
      .delete('http://127.0.0.1:5001/delete_all')  // Ajusta la URL según tu backend
      .then((response) => {
        alert('Base de datos borrada correctamente');
        onDelete();
      })
      .catch((error) => {
        alert('Error al borrar la base de datos');
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleDownload} className="m-2">
        Descargar y Guardar CSV
      </Button>
      <Button variant="danger" onClick={handleDelete} className="m-2">
        Borrar Base de Datos
      </Button>
    </div>
  );
};

export default Buttons;
