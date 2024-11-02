import axios from "axios";

export const crearProyecto  = proyecto => axios.post('https://exfinal.onrender.com/', proyecto);
export const getItem = (id) => axios.get(`https://exfinal.onrender.com/findbyid/${id}`,id);
export const updateProyecto = (id, area) => axios.put(`https://exfinal.onrender.com/${id}`, area);
export const deleteProyecto = (id) => axios.delete(`https://exfinal.onrender.com/${id}`);

export const getproyecto = () => axios.get('https://examenfinalapi.onrender.com/proyectos/todos');
