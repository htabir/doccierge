import * as React from 'react';
import Box from '@mui/material/Box';


const DashboardPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            Hello World
        </Box>
    );
}

export default DashboardPage;