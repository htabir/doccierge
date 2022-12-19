import React from "react";
import Box from "@mui/material/Box";
import theme from "../../theme";
import {Grid, Typography} from "@mui/material";
import {Chart} from "react-chartjs-2";
import {
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip
} from 'chart.js';
import {ArrowUp} from "iconsax-react";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Filler
);

const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            type: 'bar' as const,
            backgroundColor: theme.palette.primary.main,
            data: [10, 40, 80, 20, 70, 0, 0],
            borderWidth: 0,
            barPercentage: 0.5,
            borderRadius: 4,
        },
        {
            type: 'line' as const,
            backgroundColor: 'rgba(25, 35, 88, 1)',
            // borderColor: 'rgba(55, 88, 245, 0.8)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
            data: [20, 50, 90, 30, 80, 10, 10],
            fill: true,
        },

    ],
};

const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                color: theme.palette.text.primary,
            }
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false,
            }
        },
    },
    responsive: true,
}


const HealthScoreCard = () => {
    return <Grid
        item
        md={4} sm={12} xs={12}
        sx={{
            padding: {md: "0 8px 0 8px", sm: 'none'}
        }}
    >
        <Box
            sx={{
                height: 264,
                width: "100%",
                bgcolor: theme.palette.background.paper,
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{padding: 2}}>
                <Typography variant={"body1"} sx={{mb: 1, fontWeight: 600}}>Health Score</Typography>
                <Box sx={{display: "flex", alignItems: 'center'}}>
                    <Typography sx={{fontSize: 24}}>75% </Typography> <ArrowUp variant={"Linear"}/>
                </Box>

            </Box>

            <Box
                sx={{
                    height: 128,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2
                }}>
                <Chart type='bar' data={data} options={options}/>

            </Box>
        </Box>
    </Grid>;
}

export default HealthScoreCard;