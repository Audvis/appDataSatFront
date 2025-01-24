// src/components/Alert.js
import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ message, variant = 'success' }) => {
  return <Alert variant={variant}>{message}</Alert>;
};

export default CustomAlert;
