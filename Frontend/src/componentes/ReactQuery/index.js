import React from "react";
import { ProfessoresProvider } from "./context/Professor";
import { Cabecalho } from "./Cabecalho";
import { Lista } from "./Lista";
import { TopoComBotao } from "./TopoComBotao";

export const ReactQuery = () => {
    return(
        <ProfessoresProvider>
            <Cabecalho/>
            <TopoComBotao/>
            <Lista/>
        </ProfessoresProvider>
    )
}