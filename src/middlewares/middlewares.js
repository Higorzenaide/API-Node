import dotenv from 'dotenv';
dotenv.config();

const key = process.env.authorization;

export const validarChaveApi = async (req, res, next) => {
    const apiKey = req.headers['authorization'];

    if (!apiKey) {
        return res.status(400).json({ error: 'authorization não fornecido.' });
    }
    if (apiKey !== key) {
        return res.status(400).json({ error: 'Parans authorization inválido' });
    }
    next();
};