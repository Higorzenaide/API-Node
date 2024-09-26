class CreateUser {
    constructor(conectionSupabase, data) {
        this.client = conectionSupabase;
        this.data = data; // Armazena os dados recebidos
    }

    async updateUser(userId) { // Adicione um parâmetro para o ID do usuário
        // Filtra os campos não vazios e transforma em um objeto
        const updatedData = Object.fromEntries(
            Object.entries(this.data) // Converte o objeto em um array de [key, value]
                .filter(([key, value]) => {
                    return value
                }) // Filtra pares chave-valor onde o valor não é vazio
        );
        console.log(updatedData)
        try {
            const { error } = await this.client
                .from('Users')
                .update(updatedData) // Atualiza apenas os campos que foram passados
                .eq('id', userId); // Adiciona a condição para atualizar o usuário correto

            if (error) {
                throw error; // Lança o erro para ser capturado pelo catch
            }
        } catch (e) {
            console.error('Erro ao atualizar o usuário:', e.message);
            throw e; // Relança o erro para o tratamento externo
        }
    }
}


// Exporta a classe
export default CreateUser;
