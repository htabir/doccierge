import * as React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import './styles/global.css';
import AppLayout from "./layout/AppLayout";
import {Outlet} from "react-router-dom";

export default function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppLayout>
                    <Outlet/>
                </AppLayout>
            </ThemeProvider>
        </React.Fragment>
    );
}
