class CreateUser {
    constructor(conectionSupabase, data) {
        this.client = conectionSupabase;
        this.data = data; // Armazena os dados recebidos
    }

    async updateUser(userId) {
        // Remove as chaves indesejadas e filtra os campos não nulos ou indefinidos
        const updatedData = Object.fromEntries(
            Object.entries(this.data)
                .filter(([key, value]) => 
                    value !== null && value !== undefined && !['id', 'created_at', 'cpf'].includes(key)
                )
        );
    
        console.log(updatedData); // Verifica os dados filtrados
    
        try {
            const { error } = await this.client
                .from('Users')
                .update(updatedData) // Atualiza apenas os campos filtrados
                .eq('id', userId); // Condição para atualizar o usuário correto
    
            if (error) {
                throw error; // Lança o erro para ser capturado no catch
            }
        } catch (e) {
            console.error('Erro ao atualizar o usuário:', e.message);
            throw e; // Relança o erro para tratamento externo
        }
    }
}


// Exporta a classe
export default CreateUser;
