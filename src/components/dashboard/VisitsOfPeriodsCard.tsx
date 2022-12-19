import React from "react";
import theme from "../../theme";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ChartLabel from "./ChartLabel";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    tension: 0.4,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            grid: {
                display: false,
            }
        }
    }
};

const labels = ['10', '11', '12', '13', '14', '15', '16'];

export const data = {
    labels,
    datasets: [
        {
            data: [10, 30, 80, 41, 56, 55, 40],
            borderColor: theme.palette.primary.main,
            pointRadius: 0,
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: theme.palette.secondary.main,
            pointRadius: 0,
        },
    ],
};

const VisitsOfPeriodsCard = () => {
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: theme.palette.background.paper,
                borderRadius: 8,
                padding: 2,
                mt: 3
            }}
        >
            <Typography variant={"body1"} sx={{mb: 2, fontWeight: 600}}>Visits of Period</Typography>
            <Box
                sx={{
                    height: 400,
                    bgcolor: theme.palette.background.default,
                    borderRadius: 8,
                    mt: 2,
                    padding: 2
                }}
            >
                <Line options={options} data={data}/>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    mt: 2
                }}
            >
                <ChartLabel label={"Men"} color={theme.palette.primary.main} data={20} gap={0.15}/>
                <Box sx={{width: 16}}/>
                <ChartLabel label={"Women"} color={theme.palette.secondary.main} data={20} gap={0.15}/>
            </Box>
        </Box>
    );
}

export default VisitsOfPeriodsCard;