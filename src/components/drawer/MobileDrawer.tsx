import React, {useEffect} from "react";
import {Box, Divider, Drawer} from "@mui/material";
import DrawerItem from "./DrawerItem";
import {Element4, MessageText, Profile} from "iconsax-react";
import StethoscopeIcon from "../global/StethoscopeIcon";
import List from "@mui/material/List";
import {useNavigate} from "react-router-dom";
import theme from "../../theme";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 288;

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const MobileDrawer: React.FC<Props> = ({open, setOpen}) => {


    const [active, setActive] = React.useState("/");
    const navigate = useNavigate();

    useEffect(() => {
        setActive(window.location.pathname);
        console.log(active);
    }, [window.location.pathname]);

    return (
        <Drawer
            container={undefined}
            variant="temporary"
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: {xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
            }}
        >
            <DrawerHeader>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'center',
                        fontFamily: 'Martian Mono, monospace',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                    }}
                >
                    Doccierge
                </Box>
            </DrawerHeader>
            <Divider/>
            <List sx={{mt: 1.5}}>
                <DrawerItem
                    open={open}
                    text={"Dashboard"}
                    icon={<Element4 variant={"Linear"} size={24}/>}
                    route={"/"}
                    active={active}/>
                <DrawerItem
                    open={open}
                    text={"Appointments"}
                    icon={<StethoscopeIcon style={{color: theme.palette.text.primary}}/>}
                    route={"/appointments"}
                    active={active}/>
                <DrawerItem
                    open={open}
                    text={"Patients"}
                    icon={<Profile style={{color: theme.palette.text.primary}}/>}
                    route={"/patients"}
                    active={active}/>
                <DrawerItem
                    open={open}
                    text={"Chat"}
                    icon={<MessageText style={{color: theme.palette.text.primary}}/>}
                    route={"/chat"}
                    active={active}/>
            </List>
        </Drawer>
    )
}

export default MobileDrawer;