import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
            </Routes>
            </div>
    );
};

export default AppRouter;