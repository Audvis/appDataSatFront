// src/screens/Dashboard.js
import React, { useState } from 'react';
import useData from '../hooks/useData';
import DataTable from '../components/Table';
import Loader from '../components/Loader';
import CustomAlert from '../components/Alert';
import CustomButton from '../components/CustomButton'; // Renombrado a CustomButton
import ConfirmModal from '../components/ConfirmModal'; // Importamos el modal de confirmación
import { Button } from 'react-bootstrap';

const Dashboard = () => {
  const {
    data,
    loading,
    totalPages,
    totalCount,
    page,
    error,
    downloadCsv,
    changePage,
    deleteAllData,
  } = useData();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  // Estados para manejar el modal de confirmación
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null); // Acción que se va a confirmar (descargar o borrar)

  const handleDownloadAndSave = async () => {
    const success = await downloadCsv();
    if (success) {
      setAlertMessage('Los datos fueron descargados y guardados correctamente.');
      setShowAlert(true);
    } else {
      setAlertMessage('Hubo un error al descargar y guardar el archivo.');
      setShowAlert(true);
    }
  };

  const handleDeleteAll = async () => {
    const success = await deleteAllData();
    if (success) {
      setAlertMessage('Todos los registros han sido eliminados correctamente.');
      setShowAlert(true);
    } else {
      setAlertMessage('Hubo un error al eliminar los registros.');
      setShowAlert(true);
    }
  };

  // Función para abrir el modal de confirmación para descargar
  const handleDownloadConfirmation = () => {
    setModalAction('download');
    setShowModal(true); // Mostrar el modal de confirmación
  };

  // Función para abrir el modal de confirmación para borrar
  const handleDeleteConfirmation = () => {
    setModalAction('delete');
    setShowModal(true); // Mostrar el modal de confirmación
  };

  // Función que se ejecuta cuando el usuario confirma la acción
  const handleModalConfirm = () => {
    if (modalAction === 'download') {
      handleDownloadAndSave();
    } else if (modalAction === 'delete') {
      handleDeleteAll();
    }
    setShowModal(false); // Cerrar el modal
  };

  return (
    <div className="container">
      <h1>Gestión de Datos</h1>

      {/* Contenedor de botones alineados */}
      <div className="button-container">
        {/* Botón para descargar y guardar el CSV */}
        <CustomButton
          onClick={handleDownloadConfirmation} // Mostrar modal al hacer clic
          label="Descargar y Guardar CSV"
          disabled={loading || totalCount > 0} // Deshabilitar si ya hay registros
        />

        {/* Botón para borrar la base de datos */}
        <CustomButton
          onClick={handleDeleteConfirmation} // Mostrar modal al hacer clic
          label="Borrar Todos los Registros"
          disabled={loading || totalCount === 0} // Deshabilitar si no hay registros
          variant="danger" // Botón de eliminación
        />
      </div>

      {/* Mostrar el loader mientras se está procesando */}
      {loading && <Loader />}

      {/* Mostrar el mensaje de confirmación si no estamos cargando */}
      {!loading && showAlert && <CustomAlert message={alertMessage} />}

      {/* Mostrar los datos en la tabla */}
      {!loading && !error && (
        <>
          <h5>Total de Registros: {totalCount}</h5>

          <DataTable
            data={data}
            totalPages={totalPages}
            page={page}
            onPageChange={changePage}
          />
        </>
      )}

      {/* Mostrar un mensaje de error en caso de que ocurra */}
      {error && <CustomAlert message={error} variant="danger" />}

      {/* Modal de confirmación */}
      <ConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)} // Cerrar el modal
        onConfirm={handleModalConfirm} // Ejecutar la acción confirmada
        message={
          modalAction === 'download'
            ? '¿Estás seguro de que deseas descargar y guardar los datos?'
            : '¿Estás seguro de que deseas borrar todos los registros?'
        }
      />
    </div>
  );
};

export default Dashboard;
