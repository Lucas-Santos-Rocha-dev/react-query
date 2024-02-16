import React, {useContext} from "react";
import { ProfessoresContext } from "./context/Professor";

export const TopoComBotao = () => {
    const {setShowModalForm, initialStateFormModal, setStateFormModal} = useContext(ProfessoresContext);

    return(
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
    )
}