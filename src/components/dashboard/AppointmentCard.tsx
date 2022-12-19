import React from "react";
import Box from "@mui/material/Box";
import theme from "../../theme";
import {Grid, Typography} from "@mui/material";
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import ChartLabel from "./ChartLabel";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Heart Disease', 'Neurosis', 'Others'],
    datasets: [
        {
            data: [40, 30, 10],
            borderWidth: 0,
            backgroundColor: [
                theme.palette.success.main,
                theme.palette.warning.main,
                theme.palette.info.main,
            ],
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false
        },
    },

    responsive: true,
    cutout: 30
}

const AppointmentCard = () => {
    return <Grid
        item
        md={4} sm={12} xs={12}
        sx={{
            padding: {md: "0 16px 0 0", sm: 'none'}
        }}
    >
        <Box
            sx={{
                height: 264,
                width: "100%",
                bgcolor: theme.palette.background.paper,
                borderRadius: 8,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Typography variant={"body1"} sx={{mb: 2, fontWeight: 600}}>Appointments</Typography>
            <Box
                sx={{
                    maxHeight: 100,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2
                }}>
                <Doughnut data={data} options={options}/>
            </Box>
            <ChartLabel label={"Heart Disease"} color={theme.palette.success.main} data={20}/>
            <ChartLabel label={"Neurosis"} color={theme.palette.warning.main} data={20}/>
            <ChartLabel label={"Others"} color={theme.palette.info.main} data={20}/>
        </Box>
    </Grid>;
}

export default AppointmentCard;