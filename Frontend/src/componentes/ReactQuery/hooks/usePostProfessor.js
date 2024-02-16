import {useMutation, useQueryClient} from "@tanstack/react-query";
import { postProfessor } from "../../../services/Professores.service";
import {useContext} from "react";
import { ProfessoresContext } from "../context/Professor";

export const usePostProfessor = () => {

    const queryClient = useQueryClient()
    const {setShowModalForm} = useContext(ProfessoresContext)

    const mutationPost = useMutation({
        mutationFn: ({payload}) => {
            return postProfessor(payload)
        },
        onSuccess: (data) => {
            console.log("Professor criado com sucesso ", data)
            queryClient.invalidateQueries(['professores-list']).then()
            
            setShowModalForm(false);
        },
        onError: (error) => {
            console.log("Erro ao criar professor ", error.response)
        },
    })
    return {mutationPost}
}