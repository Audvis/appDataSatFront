// src/components/Button.js
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ onClick, label, disabled, variant = 'primary' }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled} // Deshabilitar el botón si está cargando
    >
      {label}
    </Button>
  );
};

export default CustomButton;
