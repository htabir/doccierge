import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import CustomAppBar from "../components/appbar/CustomAppBar";
import CustomDrawer from "../components/drawer/CustomDrawer";
import DrawerHeader from "../components/drawer/DrawerHeader";

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({children}) => {

    const [drawerOpen, setDrawerOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <CustomAppBar open={drawerOpen} setOpen={setDrawerOpen}/>
            <CustomDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                {children}
            </Box>
        </Box>
    );
}

export default AppLayout;