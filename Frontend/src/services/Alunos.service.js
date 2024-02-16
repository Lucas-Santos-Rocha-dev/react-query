import Api from "./api"

export const getAlunos = async() => {
    return (await Api.get(`alunos/`)).data
}

export const postAluno = async (payload) => {
    return (await Api.post(`alunos/`, payload))
};