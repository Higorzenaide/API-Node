class CreateUser {
    constructor(conecctionSupabse, name=0) {
        this.client = conecctionSupabse;
        this.name = name;
    }

    async selectAnyUser() {
        try {
                const { data, error } = await this.client
                .from('Users')
                .select()
                .eq('name',this.name)

            if (error) {
                throw error; // Lança o erro para ser capturado pelo catch
            }
            if(data[0] == undefined)  return `Usuário não encontrado`
            return data

        } catch (e) {
            console.error('Erro ao inserir o usuário:', e.message);
            throw e; // Relança o erro para o tratamento externo
        }
    }

    async selectAllUsers() {
        try {
                const { data, error } = await this.client
                .from('Users')
                .select()

            if (error) {
                throw error; // Lança o erro para ser capturado pelo catch
            }
            
            return data

        } catch (e) {
            console.error('Erro ao inserir o usuário:', e.message);
            throw e; // Relança o erro para o tratamento externo
        }
    }
}


// Exporta a classe
export default CreateUser;
