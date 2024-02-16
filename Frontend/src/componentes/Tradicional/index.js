import React, {useEffect, useState} from "react";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import { ModalAluno } from "./ModalAluno";

import { getAlunos, postAluno } from "../../services/Alunos.service"

export const Tradicional = () => {
    const initialStateFormModal = {
        nome: "",
        sobrenome: ""
    };

    const [listaAlunos, setListaAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [showModalForm, setShowModalForm] = useState(false);
    const [stateFormModal, setStateFormModal] = useState(initialStateFormModal);

    useEffect(() => {
        buscaListaAlunos();
    }, []);

    const buscaListaAlunos = async() => {
        try{
            let alunos = await getAlunos();
            setListaAlunos(alunos);
            setLoading(false);
        }
        catch (e){
            console.log("Erro ao buscar alunos ", e);
            setError(true);
        } 
    }

    const handleSubmit = async(values) => {
        let payload = {
            nome: values.nome,
            sobrenome: values.sobrenome,
        };

        try {
            setLoading(true);
            await postAluno(payload);
            console.log("Aluno criado com sucesso");
            setShowModalForm(false);
            await buscaListaAlunos();
        } catch (e) {
            console.log('Erro ao criar aluno ', e.response.data);
        }
    }

    const handleCloseFormModal = () => {
        setStateFormModal(initialStateFormModal);
        setShowModalForm(false)
    }

    if(loading){
        return <p>Carregando...</p>
    }

    if(error){
        return <p>Ocorreu um erro...</p>
    }

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <h1>Tradicional</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="d-flex  justify-content-end pb-4 mt-2">
                        <button 
                            onClick={()=>
                                {
                                    setStateFormModal(initialStateFormModal);
                                    setShowModalForm(true);
                                }
                            } 
                            type="button" 
                            className="btn btn-success mt-2"
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {listaAlunos && listaAlunos.length > 0 &&
                        <DataTable
                            value={listaAlunos}
                        >
                            <Column field="nome" header="Nome"/>
                            <Column 
                                field="sobrenome" 
                                header="Sobrenome" 
                            />
                        </DataTable>
                    }
                    
                </div>
            </div>

            <div>
                <ModalAluno
                    show={showModalForm}
                    stateFormModal={stateFormModal}
                    handleClose={handleCloseFormModal}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>  
    )
}