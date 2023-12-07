const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const sequelize = require('./sequelize'); */

const docenteRoutes = require('./routes/docente.routes');
const adminRoutes = require('./routes/administrador.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/docentes', docenteRoutes);
app.use('/administradores', adminRoutes);
app.use('/auth', authRoutes);

/* Sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos: ', error);
  }); */

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))