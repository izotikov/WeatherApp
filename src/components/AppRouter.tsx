import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./home/Home";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/*'} element={<Navigate to='/home' replace/>}/>
            </Routes>
            </div>
    );
};

export default AppRouter;