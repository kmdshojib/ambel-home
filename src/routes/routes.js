import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";


const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout for pages with Header and Footer */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>

            {/* Fallback for 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;
