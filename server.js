import express from 'express';
import path from 'path'; // Adicione isso
import conectionSupabase from './src/models/CreateClient.js'
import CreatUser from './src/models/CreateUser.js'
import routes from './routes.js'
import {validarChaveApi} from './src/middlewares/middlewares.js'
import cors from 'cors';
import { fileURLToPath } from 'url';  // Adicionar isso

// Obtém o caminho do arquivo atual 'Server.js'
const __filename = fileURLToPath(import.meta.url);
console.log(__filename)

// Obtém o diretório do arquivo atual onde o 'server.js' está rodando
const __dirname = path.dirname(__filename);
console.log(__dirname)

// Inicialize o app
const app = express();

// Configura o CORS para aceitar qualquer origem
app.use(cors({
    origin: true,  // Permite qualquer origem
}));

// Usar views, da pasta views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'src','public')));

// Middleware
app.use(express.json());
app.use(validarChaveApi);

// Rotas
app.use(routes);

// Obter a porta do .env ou usar 3000 como padrão
const PORT = process.env.PORT || 5172;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor Executando na porta ${PORT}`);
});
