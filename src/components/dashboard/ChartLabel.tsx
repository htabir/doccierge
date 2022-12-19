import React from "react";
import Box from "@mui/material/Box";
import Dot from "../global/Dot";
import {Typography} from "@mui/material";

interface ChartLabelProps {
    label: string;
    color: string;
    data: number;
    gap?: number;
}

const ChartLabel: React.FC<ChartLabelProps> = ({label, color, data, gap = 1}) => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: gap}} key={label}>
            <Dot color={color}/>
            <Typography variant={"body2"}>{label}</Typography>
            <Box sx={{flexGrow: 1, height: 10, marginX: 0.5, borderBottom: "1px solid #30376B"}}/>
            <Typography variant={"body2"}>{data}%</Typography>
        </Box>
    );
}

export default ChartLabel;