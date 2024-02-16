import React, {useContext} from "react";
import { ModalFormBodyText } from "../ModalBootstrap";
import {Formik} from "formik";
import { ProfessoresContext } from "./context/Professor";

export const ModalProfessor = ({handleClose, handleSubmit}) => {
    const {stateFormModal, showModalForm} = useContext(ProfessoresContext);

    const bodyTextarea = () => {
        return (
            <>
                <Formik
                    initialValues={stateFormModal}
                    onSubmit={handleSubmit}
                >
                    {props => {
                        const {
                            values,
                        } = props;
                        return(
                            <form onSubmit={props.handleSubmit}>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="form-group">
                                            <label htmlFor="nome">Nome</label>
                                            <input
                                                type="text"
                                                value={props.values.nome}
                                                name="nome"
                                                id="nome"
                                                className="form-control"
                                                onChange={props.handleChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className='col'>
                                        <label htmlFor="materia">Materia</label>
                                        <select
                                            value={props.values.materia}
                                            onChange={(e)=>{
                                                props.handleChange(e);
                                            }}
                                            name="materia"
                                            id="materia"
                                            className="form-control"
                                        >
                                            <option value=''>Selecione uma opção</option>
                                            <option value='MATEMATICA'>Matemática</option>
                                            <option value='HISTORIA'>História</option>
                                            <option value='GEOGRAFIA'>Geografia</option>
                                        </select>
                                    </div>

                                </div>
                                
                                <div className="d-flex justify-content-end mt-2">
                                    <div className="p-Y bd-highlight">
                                        <button onClick={()=>handleClose()} type="button" className={`btn btn-outline-success mt-2`} style={{marginRight: '10px'}}>Cancelar</button>
                                    </div>

                                    <div className="p-Y bd-highlight">
                                        <button type="submit" className="btn btn btn-success mt-2">Salvar</button>
                                    </div>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </>
        )
    };

    return (
        <ModalFormBodyText
            show={showModalForm}
            titulo={"Adicionar"}
            onHide={handleClose}
            size='lg'
            bodyText={bodyTextarea()}
        />
    )
};