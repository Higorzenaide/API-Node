class CreateUser {
    constructor(conecctionSupabse, name, age, email, phone, address, cpf, birth_date, job_position) {
        this.client = conecctionSupabse;
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.cpf = cpf;
        this.birth_date = birth_date;
        this.job_position = job_position;
    }

    async insertUser() {
        try {
            const { error } = await this.client
                .from('Users')
                .insert({
                    name: this.name,
                    age: this.age,
                    email: this.email,
                    phone: this.phone,
                    address: this.address,
                    cpf: this.cpf,
                    birth_date: this.birth_date,
                    job_position: this.job_position
                });

            if (error) {
                throw error; // Lança o erro para ser capturado pelo catch
            }
        } catch (e) {
            console.error('Erro ao inserir o usuário:', e.message);
            throw e; // Relança o erro para o tratamento externo
        }
    }
}


// Exporta a classe
export default CreateUser;
