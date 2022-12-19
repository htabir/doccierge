import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import theme from "../../theme";

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
                        <Typography variant={"body1"} sx={{color: "white", width: 96}}>08:30 am</Typography>
                        <Avatar
                            sx={{
                                height: 40, width: 40
                            }}
                        >
                            I
                        </Avatar>
                        <Typography variant={"body1"} sx={{color: "white", ml: 2}}>Ivan</Typography>
                    </Box>
                </Grid>
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
                        <Typography variant={"body1"} sx={{color: "white", width: 96}}>08:30 am</Typography>
                        <Avatar
                            sx={{
                                height: 40, width: 40
                            }}
                        >
                            I
                        </Avatar>
                        <Typography variant={"body1"} sx={{color: "white", ml: 2}}>Ivan</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UpcomingAppointments;