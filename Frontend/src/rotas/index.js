import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Home } from "../componentes/Home"
import { Tradicional } from "../componentes/Tradicional"
import { ReactQuery } from "../componentes/ReactQuery";

const routesConfig = [
    {
        exact: true,
        path: "/",
        component: <Home/>,
    },
    {
        exact: true,
        path: "tradicional",
        component: <Tradicional/>,
    },
    {
        exact: true,
        path: "react-query",
        component: <ReactQuery/>,
    },
]

const privateRouter = (key, exact, path, element) => {
    return <Route key={key} exact={exact} path={path} element={element}></Route>
}

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                {routesConfig.map((value, key) => {
                    return(
                        privateRouter(key, value.exact, value.path, value.component)
                    )
                })}
            </Routes>
        </Router>
        
    )
}