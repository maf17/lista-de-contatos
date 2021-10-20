import axios from "axios"

const baseUrl = 'http://localhost:3000'

export const criarContatos = async (contatos) => {
    const url = `${baseUrl}/contatos`
    return await axios.post(url, contatos)
}

export const getAllContatos = async () => {
    const url = `${baseUrl}/contatos`
    return await axios.get(url)
}

export const deletarContato = async (id) => {
    const url = `${baseUrl}/contatos/${id}`
    return await axios.delete(url)
  }

export const editarContato = async (id,conteudo) => {
    const url = `${baseUrl}/contatos/${id}`
    return await axios.put(url,conteudo)
}

