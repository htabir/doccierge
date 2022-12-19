import React from "react";
import {Box} from "@mui/material";
import theme from "../../theme";

interface Props {
    size?: number;
    color?: string
}

const Dot: React.FC<Props> = ({size = 12, color = theme.palette.primary.main}) => {
    return (
        <Box
            sx={{
                height: size,
                width: size,
                borderRadius: '50%',
                bgcolor: color,
                mr: 1
            }}
        />
    )
}

export default Dot;