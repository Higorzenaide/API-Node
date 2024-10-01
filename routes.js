import express from 'express';
import conectionSupabase from './src/models/CreateClient.js'
import CreatUser from './src/models/CreateUser.js'
import viewUser from './src/models/viewClients.js'
import editUser from './src/models/editClient.js'
import { tutorial } from './src//middlewares/middlewares.js'


const route = express.Router();


route.post('/usuarios', async (req, res) => {

    const { name, age, email, phone, address, cpf, birth_date, job_position } = req.body;

    const user = new CreatUser(
        conectionSupabase,
        name,
        age,
        email,
        phone,
        address,
        cpf,
        birth_date,
        job_position
    );

    // Espera a inserção do usuário e envia a resposta apropriada
    try {
        await user.insertUser(); // Chama explicitamente o método insertUser
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (e) {
        console.error('Erro ao tentar criar o usuário:', e);
        res.status(500).json({ error: 'Erro ao criar o usuário', details: e.message });
    }
});

route.get('/usuarios/:name?', async(req,res) => {

    const username = req.params.name;

    if(!username){
        const user = new viewUser(
            conectionSupabase
        );
        try {
            const response = await user.selectAllUsers();
            res.status(200).json({ response });
        } catch (e) {
            console.error('Erro ao tentar trazer usuários:', e);
            res.status(500).json({ error: 'Erro ao tentar trazer usuários:', details: e.message });
        }
    }else{
        const user = new viewUser(
            conectionSupabase,
            username
        );

            // Espera a inserção do usuário e envia a resposta apropriada
        try {
            const response = await user.selectAnyUser(); // Chama explicitamente o método insertUser
            res.status(200).json({ response });
        } catch (e) {
            console.error('Erro ao tentar trazer usuários:', e);
            res.status(500).json({ error: 'Erro ao tentar trazer usuários:', details: e.message });
        }
    }
})

route.put('/usuarios/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = req.body; // Pega os dados do corpo da requisição

    const user = new editUser(conectionSupabase, userData);

    try {
        await user.updateUser(userId); // Chama o método para atualizar o usuário
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (e) {
        console.error('Erro ao tentar atualizar o usuário:', e);
        res.status(500).json({ error: 'Erro ao atualizar o usuário', details: e.message });
    }
});

route.get('/', tutorial)

route.get('/manterServico', async (request, response) => {
    const ip = request.headers['x-forwarded-for'] || request.ip;
    console.log(`IP do cliente: ${ip}`);
    response.status(200).json({ message: 'Serviço mantido' });
});
export default route;