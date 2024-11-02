import React, { useState, useEffect } from 'react';
import { getproyecto, deleteProyecto } from './apis';
import './DataTable.css'
const DataTable = () => {
  const [proyectos, setProyectos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchProyectos = () => {
    getproyecto().then(response => {
      setProyectos(response.data || []);
    }).catch(error => {
      console.error("Error fetching data: ", error);
    });
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteProyecto(id);
      fetchProyectos();
    } catch (error) {
      console.error("Error deleting area: ", error);
    }
  };

  return (
    <div>
      <h1 class = "centre">CRUD </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>titulo</th>
            <th>descripcion</th>
            <th>completada</th>
            <th>fecha_creacion</th>
            <th>fechaVencimiento</th>
            <th>prioridad</th>
            <th>asignadoA</th>
            <th>categoria</th>
            <th>pagado</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map(pr => (
            <tr key={pr.id}>
              <td>{pr.id}</td>
              <td>{pr.titulo}</td>
              <td>{pr.descripcion}</td>
              <td>{pr.completada}</td>
              <td>{pr.fecha_creacion}</td>
              <td>{pr.fechaVencimiento}</td>
              <td>{pr.prioridad}</td>
              <td>{pr.asignadoA}</td>
              <td>{pr.categoria}</td>
              <td>{pr.pagado}</td>

              <td>
                <button onClick={() => handleEditClick(pr.id)}>Editar</button>
                <button onClick={() => handleDeleteClick(pr.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
