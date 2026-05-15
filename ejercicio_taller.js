import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

 app.listen(1984, () => {
   console.log('Up and up');
  });

let cupones = [
    {
        "codigo-cupon": "Desc10%", 
        "descuento": 0.1
    }
]

app.get('/api/cupones', (req, res) => {
      try {
      res.json(cupones);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    });

app.post('/api/cupones', (req, res) => {
  try {
    const { codigo, descuento } = req.body;

    if (!codigo || descuento === undefined) {
      return res.status(400).json({
        error: 'Se requieren los campos: codigo y descuento'
      });
    }

    if (typeof descuento !== 'number' || descuento <= 0 || descuento > 1) {
      return res.status(400).json({
        error: 'descuento debe ser un número entre 0 y 1 (ej: 0.15 para 15%)'
      });
    }

    const nuevoCupon = { "codigo-cupon": codigo, descuento };
    cupones.push(nuevoCupon);

    res.status(201).json({
      mensaje: 'Cupón creado exitosamente',
      cupon: nuevoCupon
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
