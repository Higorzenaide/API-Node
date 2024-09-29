import dotenv from 'dotenv';
dotenv.config();

const key = process.env.authorization;

export const validarChaveApi = async (req, res, next) => {
    const apiKey = req.headers['authorization'];

    if (!apiKey) {
        return tutorial(req, res, next); // Chame o tutorial passando req e res
    }
    if (apiKey !== key) {
        return res.status(400).json({ error: 'Parans authorization inválido' });
    }
};

export const tutorial = async (req, res, next) =>{
    res.render('index');
}

