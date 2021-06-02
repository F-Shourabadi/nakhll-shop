import React from 'react'
import Routes, { RenderRoutes } from '../routes/RoutesConfig';

let Www = () => {

    return (
        <div>
            <RenderRoutes routes={Routes} />
        </div>
    )
}

export { Www };
