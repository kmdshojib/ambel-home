import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
    const closeDrawer = () => setIsDrawerOpen(false);
    return (
        <>

            <Navigation
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
                closeDrawer={closeDrawer}
            />
            <main>
                <Outlet />
            </main>
            <Footer />

        </>
    );
};

export default Layout;
