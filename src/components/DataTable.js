// src/components/DataTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Pagination } from 'react-bootstrap';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5001/get_data?page=${page}&per_page=5`)  // Ajusta la URL según tu backend
      .then((response) => {
        setData(response.data);
        setTotalPages(Math.ceil(response.data.length / 5));  // Ajusta la lógica de paginación si es necesario
      })
      .catch((error) => {
        console.error('Error al obtener los datos', error);
      });
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>RFC</th>
            <th>Razón Social</th>
            <th>Tipo Persona</th>
            <th>Supuesto</th>
            <th>Fecha Cancelación</th>
            <th>Monto</th>
            <th>Fecha Publicación</th>
            <th>Entidad Federativa</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.RFC}</td>
              <td>{item.RAZON_SOCIAL}</td>
              <td>{item.TIPO_PERSONA}</td>
              <td>{item.SUPUESTO}</td>
              <td>{item.FECHA_CANCELACION}</td>
              <td>{item.MONTO}</td>
              <td>{item.FECHA_PUBLICACION}</td>
              <td>{item.ENTIDAD_FEDERATIVA}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Paginación */}
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === page}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default DataTable;
