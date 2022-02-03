import React from "react";

import { Outlet } from "react-router-dom";
import { Footer } from "./Footer.js";
import { Navigation } from "./Navigation.js";


export function DefaultLayout() {
    return (
        <div>
            <nav>
                <Navigation />
            </nav>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}