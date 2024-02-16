import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return(
        <>
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <h1>Selecione uma opção</h1>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" style={{marginRight: '10px'}} onClick={() => navigate(`/tradicional`)}>
                        Tradicional
                    </button>

                    <button type="button" className="btn btn-primary" onClick={() => navigate(`/react-query`)}>
                        React query
                    </button>
                </div>
            </div>

            
        </div>
        </>
    )
}