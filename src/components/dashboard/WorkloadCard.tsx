import React from "react";
import Box from "@mui/material/Box";
import theme from "../../theme";
import {Grid, Typography} from "@mui/material";
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            data: [75, 25],
            borderWidth: 0,
            backgroundColor: [
                theme.palette.secondary.main,
                '#1D2549'
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
    cutout: 40
}


const WorkloadCard = () => {
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
            <Typography variant={"body1"} sx={{mb: 2, fontWeight: 600}}>Today's Workload</Typography>
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant={"caption"}>Your workload today</Typography>
                <Typography sx={{fontSize: 24}}>75%</Typography>

            </Box>
        </Box>
    </Grid>;
}

export default WorkloadCard;