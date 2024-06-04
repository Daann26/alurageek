const http = require('http');

// Define el hostname y el puerto del servidor JSON independiente
const hostname = 'localhost';
const jsonServerPort = 3000; // Puerto predeterminado de json-server

// Define la ruta de la API a la que deseas hacer solicitudes
const apiPath = '/products'; // Suponiendo que esta es la ruta de tu API

// Crea la solicitud HTTP
const options = {
  hostname: hostname,
  port: jsonServerPort,
  path: apiPath,
  method: 'GET' // Cambia el método según sea necesario (GET, POST, etc.)
};

// Realiza la solicitud HTTP al servidor JSON
const req = http.request(options, (res) => {
  let data = '';

  // Escucha el evento 'data' para recopilar la respuesta
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Escucha el evento 'end' para procesar la respuesta completa
  res.on('end', () => {
    // Procesa los datos recibidos
    console.log(JSON.parse(data));
  });
});

// Escucha el evento 'error' en caso de que haya algún error de conexión
req.on('error', (error) => {
  console.error('Error de solicitud:', error);
});

// Finaliza la solicitud
req.end();  