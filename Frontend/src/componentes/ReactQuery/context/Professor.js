import React, { createContext, useMemo, useState } from 'react';


const initialStateFormModal = {
    nome: '',
    materia: ''
};

export const ProfessoresContext = createContext({
    showModalForm: false,
    setShowModalForm: () => {},
    stateFormModal: initialStateFormModal,
    setStateFormModal: () => {},
})

export const ProfessoresProvider = ({children}) => {

    
    const [showModalForm, setShowModalForm] = useState(false);
    const [stateFormModal, setStateFormModal] = useState(initialStateFormModal);
    

    const contextValue = useMemo(() => {
        return {
            showModalForm,
            setShowModalForm,
            initialStateFormModal,
            stateFormModal,
            setStateFormModal,
        };
    }, [showModalForm, stateFormModal,]);

    return (
        <ProfessoresContext.Provider value={contextValue}>
            {children}
        </ProfessoresContext.Provider>
    )

}