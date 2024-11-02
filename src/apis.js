import axios from "axios";

export const crearProyecto  = proyecto => axios.post('https://examenfinalapi.onrender.com/proyectos/crear/', proyecto);
export const getItem = (id) => axios.get(`https://examenfinalapi.onrender.com/proyectos/buscar/${id}`,id);
export const updateProyecto = (id, area) => axios.put(`https://exfinal.onrender.com/${id}`, area);
export const deleteProyecto = (id) => axios.delete(`https://examenfinalapi.onrender.com/proyectos/delete/${id}`);

export const getproyecto = () => axios.get('https://examenfinalapi.onrender.com/proyectos/todos');
