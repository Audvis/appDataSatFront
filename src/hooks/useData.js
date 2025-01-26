// src/hooks/useData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (initialPage = 1) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = 'http://127.0.0.1:5000';

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${url}/get_data?page=${page}&per_page=5`
      );
      setData(response.data.data);
      setTotalPages(response.data.total_pages);
      setTotalCount(response.data.total_count);
    } catch (err) {
      setError('Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const downloadCsv = async () => {
    setLoading(true);
    try {
      await axios.get(`${url}/download_csv`);
      fetchData(); // Actualizamos los datos después de guardar el CSV
      return true;
    } catch (err) {
      setError('Error al descargar y guardar el archivo');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const deleteAllData = async () => {
    setLoading(true);
    try {
      await axios.delete(`${url}/delete_all`);
      setData([]); // Limpiamos los datos en el estado inmediatamente
      setTotalCount(0); // Reseteamos el contador
      return true;
    } catch (err) {
      setError('Error al eliminar los registros');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    totalPages,
    totalCount,
    page,
    error,
    downloadCsv,
    changePage,
    deleteAllData,
  };
};

export default useData;
