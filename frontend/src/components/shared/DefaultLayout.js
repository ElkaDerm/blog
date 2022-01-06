import React from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation.js";


export function DefaultLayout () {
    return (
        <div>
            <nav>
                <Navigation/>
            </nav>
            <Outlet/>
            <footer>Footer</footer>
        </div>
    )
}