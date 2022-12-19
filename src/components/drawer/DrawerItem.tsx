import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import {Box} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {useNavigate} from "react-router-dom";

interface Props {
    open: boolean;
    text: string;
    icon: React.ReactNode;
    route: string;
    active: string;
}

const DrawerItem: React.FC<Props> = (
    {
        open,
        text,
        icon,
        route,
        active
    }
) => {

    const navigate = useNavigate();
    return (
        <ListItem
            key={text}
            disablePadding sx={{display: 'block', my: 0.5}}
            onClick={() => navigate(route)}
        >
            <ListItemButton
                sx={{
                    minHeight: 56,
                    justifyContent: open ? 'initial' : 'center',
                    padding: 0
                }}
            >
                <Box
                    sx={{
                        minHeight: 56,
                        marginLeft: open ? 2 : 0,
                        paddingX: 3.5,
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                        bgcolor: active === route ? "primary.main" : "transparent",
                        borderRadius: open ? '28px 0 0 28px' : '0px',
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 2 : 'auto',
                            color: 'primary.contrastText'
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        sx={{
                            display: open ? 'block' : 'none'
                        }}
                    />
                </Box>
            </ListItemButton>
        </ListItem>
    );
}

export default DrawerItem;