import Api from "./api"

export const getProfessores = async() => {
    return (await Api.get(`professores/`)).data
}

export const postProfessor = async (payload) => {
    return (await Api.post(`professores/`, payload))
};