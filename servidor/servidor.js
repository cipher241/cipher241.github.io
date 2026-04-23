//HTML (HyperText Markup Language) sirve para crear y estructurar páginas web. Es el lenguaje básico de Internet y se utiliza para decirle al navegador qué contenido mostrar y cómo organizarlo.
import http from 'http';
//fs (File System) Sirve para trabajar con archivos y carpetas desde tu código.
import fs from 'fs';


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       
      
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //500 significa que hubo un error en el servidor, es decir, algo salió mal al procesar la solicitud. No es culpa del usuario, sino del servidor.
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //200 significa que la solicitud fue exitosa y el servidor está devolviendo el contenido solicitado.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de los usuarios
    function getUsuarios(req, res) {
        const usuarios = [{
            "nombre": "Punk",
            "saldo": "0",
          },
          {
            "nombre": "Lola",
            "saldo": "1000",
          }
        ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(usuarios));
    }

    function mostrarUsuarios(req, res) {
        fs.readFile('usuarios.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarMovimientos(req, res) {
        //Construye una página básica movimientos.html
        fs.readFile('movimientos.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las movimientos
    function getMovimientos(req, res) {
      const movimientos = [{
            "nombre": "Punk",
            "saldo_anterior": "1000",
            "saldo_actual": "0",
          },
          {
            "nombre": "Lola",
            "saldo_anterior": "0",
            "saldo_actual": "1000",
          }
        ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(movimientos));
    }

    function mostrarEquipo(req, res) {
        fs.readFile('equipo.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function mostrarOpinion(req, res) {
        fs.readFile('opinion.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function getCashback(req, res) {
        const cashback = {
            "nombre": "Punk",
            "Pago": "1000000",
            "Cashback": "0.000001%",
            "Cash back en pesos": "0.01"
        };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(cashback));
    }

    function eliminarUsuario(req, res) {
      const usuario = {
            "nombre": "Punk",
            "saldo": "0",
            "deuda": "0",

            "eliminado": "true"
        };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(usuario));
    }

    function autentificarUsuario(req, res) {
      const usuario = {
            "nombre": "Punk",
            "Se inició sesión": "true",
        };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(usuario));
    }

    function checkout(req, res) {
      const checkout = {
            "Pago": "1000000",
            "Pagado" : "true",

            "checkout": "completado"
        };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(checkout));
    }

    function getSaldo(req, res) {
      const usuario = {
            "nombre": "Punk",
            "saldo": "Billon de trillones de pesos",
        };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(usuario));
    }

    function crearUsuario(req, res) {
      const usuarioNuevo = {
            "nombre": "Punk2",
            "saldo": "1000",
        };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //stringify convierte un objeto de JavaScript en una cadena JSON. Esto es necesario porque el servidor debe enviar datos en formato de texto, y JSON es un formato de texto que representa objetos y estructuras de datos.
      res.end(JSON.stringify(usuarioNuevo));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Bro aprende a escribir bien la ruta');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/usuarios') {
        getUsuarios(req, res);
      } else if (url === '/api/movimientos') {
        getMovimientos(req, res);
      } 
      else if (url === '/usuarios') {
        mostrarUsuarios(req, res);
      } 
      else if (url === '/movimientos') {
        mostrarMovimientos(req, res);
      } else if (url === '/perfil') {
        mostrarPerfil(req, res);
      } else if (url === '/equipo') {
        mostrarEquipo(req, res);
      } else if (url === '/opinion') {
        mostrarOpinion(req, res);
       } else if (url === '/api/cashback') {
        getCashback(req, res);
       } else if (url === '/api/eliminar-usuario') {
        eliminarUsuario(req, res);
       } else if (url === '/api/autentificar-usuario') {
        autentificarUsuario(req, res);
       } else if (url === '/api/checkout') {
        checkout(req, res);
       } else if (url === '/api/saldo') {
        getSaldo(req, res);
       } else if (url === '/api/crear-usuario') {
        crearUsuario(req, res);
       }

      
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase? Yo creo que no se puede ver porque el servidor no tiene acceso a la imagen, es decir, no está en la misma carpeta que el servidor o no se ha especificado correctamente la ruta de la imagen en el código HTML.

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html