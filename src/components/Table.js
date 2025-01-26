// src/components/Table.js
import React from 'react';
import { Table, Pagination } from 'react-bootstrap';

const DataTable = ({ data = [], totalPages, page, onPageChange }) => {
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

      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        />
        <Pagination.Next
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default DataTable;
