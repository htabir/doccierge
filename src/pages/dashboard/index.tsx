import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup, FormControl, Grid, MenuItem, Select} from "@mui/material";
import theme from "../../theme";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import AppointmentCard from "../../components/dashboard/AppointmentCard";
import WorkloadCard from "../../components/dashboard/WorkloadCard";
import HealthScoreCard from "../../components/dashboard/HealthScoreCard";
import VisitsOfPeriodsCard from "../../components/dashboard/VisitsOfPeriodsCard";
import UpcomingAppointments from "../../components/dashboard/UpcomingAppointments";

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
                <VisitsOfPeriodsCard/>

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
                <UpcomingAppointments/>

            </Grid>
        </Grid>
    );
}

export default DashboardPage;