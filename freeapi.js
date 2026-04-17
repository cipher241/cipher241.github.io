import 'dotenv/config';
import http from 'http';
import fetch from 'node-fetch';

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

async function obtenerJuegosDeUsuario() {
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&format=json`;

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error al llamar Steam API: ${respuesta.status}`);
  }

  const datos = await respuesta.json();
  return datos.response.games || [];
}

// ─── Función para leer el body de una petición POST ───────────────────────
function leerBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

// ─── Servidor ──────────────────────────────────────────────────────────────
const servidor = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);

  // GET /juegos → devuelve la lista de juegos del usuario
  if (req.method === 'GET' && req.url === '/juegos') {
    try {
      const juegos = await obtenerJuegosDeUsuario();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ total: juegos.length, juegos }));

    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }

  // POST /buscar → recibe { nombre } y busca ese juego en la lista del usuario
  } else if (req.method === 'POST' && req.url === '/buscar') {
    try {
      const nombre = "Inscryption";

      if (!nombre) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Envía { "nombre": "nombre del juego" }' }));
        return;
      }

      const juegos = await obtenerJuegosDeUsuario();
      const encontrados = juegos.filter(j =>
        j.name.includes(nombre)
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ total: encontrados.length, juegos: encontrados }));

    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }

  // Ruta no encontrada
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Rutas disponibles: GET /juegos | POST /buscar' }));
  }
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
