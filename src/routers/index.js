import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/home/Dashboard";
import Signin from "../pages/sign-in/Signin";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;