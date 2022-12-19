import React from "react";
import theme from "../../theme";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ChartLabel from "./ChartLabel";

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
                    mt: 2
                }}
            >

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    mt: 2
                }}
            >
                <ChartLabel label={"Men"} color={theme.palette.primary.main} data={20} gap={0.15}/>
                <Box sx={{width: 16}}/>
                <ChartLabel label={"Men"} color={theme.palette.secondary.main} data={20} gap={0.15}/>
            </Box>
        </Box>
    );
}

export default VisitsOfPeriodsCard;