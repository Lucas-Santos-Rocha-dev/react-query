import { getProfessores } from "../../../services/Professores.service";
import {useQuery} from "@tanstack/react-query";


export const useGetProfessores = () => {

    const { isLoading, isError, data, refetch } = useQuery(
        ['professores-list'],
        ()=> getProfessores(),
        {
            keepPreviousData: true,
            staleTime: 5000, // 5 segundos
            refetchOnWindowFocus: true, // Caso saia da aba e voltar ele refaz a requisição
        }
    );

    return {isLoading, isError, data, refetch}
}