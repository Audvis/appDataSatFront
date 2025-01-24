// src/App.js
import React, { useState } from 'react';
import Buttons from './components/Buttons';
import DataTable from './components/DataTable';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [dataUpdated, setDataUpdated] = useState(false);

  const handleDownload = () => {
    setDataUpdated(!dataUpdated);  // Actualiza el estado para refrescar la tabla
  };

  const handleDelete = () => {
    setDataUpdated(!dataUpdated);  // Refresca la tabla después de eliminar los datos
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Buttons onDownload={handleDownload} onDelete={handleDelete} />
          <DataTable key={dataUpdated} /> {/* Se recarga la tabla cada vez que se actualiza el estado */}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
