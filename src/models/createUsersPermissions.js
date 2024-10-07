class CreateUserPermissons {
    constructor(conecctionSupabse, name, age, email, phone, address, cpf, birth_date, job_position,editPermission,deletePermission,insertPermission,createPermission) {
        this.client = conecctionSupabse;
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.cpf = cpf;
        this.birth_date = birth_date;
        this.job_position = job_position;
        this.editPermission = editPermission;
        this.deletePermission = deletePermission;
        this.insertPermission = insertPermission;
        this.createPermission = createPermission;
    
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
                    job_position: this.job_position,
                    editPermission: this.editPermission,
                    deletePermission:this.deletePermission,
                    insertPermission: this.insertPermission,
                    createPermission: this.createPermission
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
export default CreateUserPermissons;
