import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import theme from "../../theme";

interface AppointmentCardProps {
    name: string;
    time: string;
    avatar: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({name, time, avatar}) => {
    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    height: 56,
                    bgcolor: theme.palette.primary.dark,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    paddingX: 2,
                }}
            >
                <Typography variant={"body1"} sx={{color: "white", width: 96}}>{time}</Typography>
                <Avatar
                    sx={{
                        height: 40, width: 40
                    }}
                    src={avatar}
                >

                </Avatar>
                <Typography variant={"body1"} sx={{color: "white", ml: 2}}>{name}</Typography>
            </Box>
        </Grid>
    );
}

const UpcomingAppointments = () => {
    return (
        <Box
            sx={{
                mt: 2,
                width: "100%",
                bgcolor: theme.palette.background.paper,
                borderRadius: 8,
                padding: 2,
                marginBottom: '16px'
            }}
        >
            <Typography variant={"body1"} sx={{mb: 2, fontWeight: 600}}>Upcoming Appointments</Typography>
            <Grid container spacing={2}>

                <AppointmentCard name={"Ivan"} time={"08:30 AM"}
                                 avatar={"https://cdn-icons-png.flaticon.com/512/147/147133.png"}/>
                <AppointmentCard name={"Arter"} time={"09:30 AM"}
                                 avatar={"https://cdn-icons-png.flaticon.com/512/147/147142.png"}/>
                <AppointmentCard name={"Lorem"} time={"09:40 AM"}
                                 avatar={"https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"}/>

            </Grid>
        </Box>
    );
}

export default UpcomingAppointments;