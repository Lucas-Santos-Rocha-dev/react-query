import React, {useContext} from "react";
import { ProfessoresContext } from "./context/Professor";
import { useGetProfessores } from "./hooks/useGetProfessores";
import { usePostProfessor } from "./hooks/usePostProfessor";

import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import { ModalProfessor } from "./ModalProfessor";

export const Lista = () => {
    const {setShowModalForm, stateFormModal, setStateFormModal, showModalForm, initialStateFormModal} = useContext(ProfessoresContext);
    
    const {isLoading, data, isError} = useGetProfessores();
    
    
    const {mutationPost} = usePostProfessor();

    

    const handleSubmitFormModal = async(values) => {
        let payload = {
            nome: values.nome,
            materia: values.materia
        };

        mutationPost.mutate({payload: payload})
    }

    const handleCloseFormModal = () => {
        setStateFormModal(initialStateFormModal);
        setShowModalForm(false)
    }


    if(isLoading){
        return <p>Carregando</p>
    }

    if(isError){
        return <p>Ocorreu algum erro</p>
    }

    return(
        <>
        <div className="row">
            <div className="col-12">
                {data && data.length > 0 &&
                    <DataTable
                        value={data}
                    >
                        <Column field="nome" header="Nome"/>
                        <Column field="materia" header="Matéria"/>
                    </DataTable>
                }
                
            </div>
        </div>

        <div>
            <ModalProfessor
                show={showModalForm}
                stateFormModal={stateFormModal}
                handleClose={handleCloseFormModal}
                handleSubmit={handleSubmitFormModal}
            />
        </div>
        </>
    )
}