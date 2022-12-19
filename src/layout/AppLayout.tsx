import React from 'react';
import {Box, CssBaseline, useMediaQuery} from "@mui/material";
import CustomAppBar from "../components/appbar/CustomAppBar";
import DesktopDrawer from "../components/drawer/DesktopDrawer";
import DrawerHeader from "../components/drawer/DrawerHeader";
import MobileDrawer from "../components/drawer/MobileDrawer";

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({children}) => {
    const isTablet = useMediaQuery("(max-width: 900px)");

    const [drawerOpen, setDrawerOpen] = React.useState(!isTablet);

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
            {isTablet ?
                <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
                :
                <DesktopDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
            }
            <Box component="main" sx={{flexGrow: 1, p: 4}}>
                {isTablet ? <DrawerHeader/> : null}
                {children}
            </Box>
        </Box>
    );
}

export default AppLayout;