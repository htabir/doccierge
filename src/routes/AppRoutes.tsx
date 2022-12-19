import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import DashboardPage from "../pages/dashboard";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path='/' element={<DashboardPage/>}/>
                    <Route path='appointments/' element={<DashboardPage/>}/>
                    <Route path='patients/' element={<DashboardPage/>}/>
                    <Route path='chat/' element={<DashboardPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;