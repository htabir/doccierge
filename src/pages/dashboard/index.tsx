import * as React from 'react';
import Box from '@mui/material/Box';
import {Avatar, Button, ButtonGroup, FormControl, Grid, MenuItem, Select, Typography} from "@mui/material";
import theme from "../../theme";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import AppointmentCard from "../../components/dashboard/AppointmentCard";
import WorkloadCard from "../../components/dashboard/WorkloadCard";
import HealthScoreCard from "../../components/dashboard/HealthScoreCard";

ChartJS.register(ArcElement, Tooltip, Legend);


const DashboardPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };


    return (
        <Grid container spacing={3}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
                <Box sx={{maxHeight: 48}}>
                    <FormControl sx={{m: 1, minWidth: 120}} size="small">
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={"1"}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 6,
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.divider,
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.divider,
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.divider,
                                },
                                '.MuiSvgIcon-root ': {
                                    fill: "white !important",
                                },
                                paddingX: 2
                            }}
                        >
                            <MenuItem value={"1"}>Week: June 9-24</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Grid container sx={{mt: 2}}>
                    <AppointmentCard/>
                    <HealthScoreCard/>
                    <WorkloadCard/>
                </Grid>
                <Box
                    sx={{
                        height: 400,
                        width: "100%",
                        bgcolor: theme.palette.background.paper,
                        borderRadius: 8,
                        padding: 2,
                        mt: 3
                    }}
                >
                    <Typography variant={"body1"} sx={{mb: 2, fontWeight: 600}}>Visits of Period</Typography>
                </Box>

            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
                <Box
                    sx={{
                        maxHeight: 48,
                        display: 'flex',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup size="medium" aria-label="medium button group" sx={{width: "100%"}}>
                        <Button
                            key="one"
                            sx={{
                                flexGrow: 1,
                                borderRadius: 6,
                            }}
                        >
                            Day
                        </Button>
                        <Button variant={"contained"} key="two" sx={{flexGrow: 1}}>Week</Button>
                        <Button
                            key="three"
                            sx={{
                                flexGrow: 1,
                                borderRadius: 6,
                            }}
                        >
                            Month
                        </Button>
                    </ButtonGroup>
                </Box>
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
                    <Box
                        sx={{
                            height: 56,
                            bgcolor: theme.palette.primary.dark,
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            paddingX: 2,
                            my: 1,
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
                </Box>
            </Grid>
        </Grid>
    );
}

export default DashboardPage;