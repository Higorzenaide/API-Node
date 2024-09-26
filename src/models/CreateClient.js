import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.DATABASE_URL;
const supabaseKey = process.env.SECRET_KEY;

class CreateClient {
  constructor(url, secret_key) {
    this.url = url;
    this.secret_key = secret_key;
    this.client = null;

    // Chama a conexão logo no construtor
    this.connection()
      .then(() => console.log('Conexão com o Supabase criada com sucesso'))
      .catch((e) => console.log(`Erro ao conectar ao Supabase: ${e}`));
  }

  async connection() {
    this.client = createClient(this.url, this.secret_key);
  }
}

// Exporta a instância criada
const supabase = new CreateClient(supabaseUrl, supabaseKey).client;
export default supabase;
