import express from 'express';
import conectionSupabase from './src/models/CreateClient.js'
import CreatUser from './src/models/CreateUser.js'
import routes from './routes.js'
import {validarChaveApi} from './src/middlewares/middlewares.js'

const app = express();
app.use(express.json());
app.use(validarChaveApi)
app.use(routes)


// O resto do seu código
app.listen(3000, () => {
    console.log('Servidor Executando');
});
