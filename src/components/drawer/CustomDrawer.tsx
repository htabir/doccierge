import React, {useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {CSSObject, styled, Theme, useTheme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import DrawerHeader from "./DrawerHeader";
import {Box} from "@mui/material";
import {ArrowLeft2, ArrowRight2, Element4, MessageText, Profile} from "iconsax-react";
import StethoscopeIcon from "../global/StethoscopeIcon";
import {useNavigate} from "react-router-dom";
import DrawerItem from "./DrawerItem";

const drawerWidth = 288;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const CustomDrawer: React.FC<Props> = ({open, setOpen}) => {

    const theme = useTheme();
    const [active, setActive] = React.useState("/");
    const navigate = useNavigate();

    useEffect(() => {
        setActive(window.location.pathname);
        console.log(active);
    }, [window.location.pathname]);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
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
                <IconButton onClick={handleDrawerClose}
                            sx={{color: 'primary.contrastText', bgcolor: "rgba(255, 255, 255, 0.08)"}}>
                    {theme.direction === 'rtl' ?
                        <ArrowRight2 variant={"Bold"} size={14}/>
                        :
                        <ArrowLeft2 variant={"Bold"} size={14}/>
                    }
                </IconButton>
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
    );
}

export default CustomDrawer;