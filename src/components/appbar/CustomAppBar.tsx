import React from "react";
import {styled} from "@mui/material/styles";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {HambergerMenu} from "iconsax-react";
import theme from "../../theme";
import {Avatar, Box} from "@mui/material";

const drawerWidth = 288;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const CustomAppBar: React.FC<Props> = ({open, setOpen}) => {

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && {display: 'none'}),
                    }}
                >
                    <HambergerMenu variant={"Linear"} color={theme.palette.text.primary}/>
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Avatar sx={{bgcolor: 'primary.main', color: 'text.primary'}}>JH</Avatar>
                    {/*<IconButton sx={{*/}
                    {/*    ml: 2,*/}
                    {/*    display: {xs: 'block', sm: 'none'},*/}
                    {/*}}>*/}
                    {/*    <TextalignLeft variant={"Linear"} color={theme.palette.text.primary} />*/}
                    {/*</IconButton>*/}

                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;