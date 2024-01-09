export const  base = "http://192.168.1.232:8080";
export const baseURL = "http://192.168.1.232:8080/api/";


//Info
export const infoURL = `${baseURL}trabajadores/info/`

//Camiones
export const camionesURL = `${baseURL}camiones/`; //camionxtrabajador
export const camionxtrabajadorURL = `${camionesURL}/camionxtrabajador/`

// Incidencias Generales por camion
export const IncidenciasURL = `${baseURL}incidencias/`
export const IncidenciasxCamionR = `${baseURL}incidencias/camSR/1/`;
export const IncidenciasxCamionSR = `${baseURL}incidencias/camSR/0/`;


export const bateriasxCamion = `${baseURL}baterias/camiones/`;

export const detalleBaterias = `${baseURL}detalles/`;