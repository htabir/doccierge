import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup, FormControl, Grid, MenuItem, Select} from "@mui/material";
import theme from "../../theme";


const DashboardPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
                <Box>
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
                <Grid container sx={{mt: 1}}>
                    <Grid
                        item
                        md={4} sm={12} xs={12}
                        sx={{
                            padding: {md: "0 16px 0 0", sm: 'none'}
                        }}
                    >
                        <Box
                            sx={{
                                height: 248,
                                width: "100%",
                                bgcolor: theme.palette.background.paper,
                                borderRadius: 8,
                                padding: 2,
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={4} sm={12} xs={12}
                        sx={{
                            padding: {md: "0 8px 0 8px", sm: 'none'}
                        }}
                    >
                        <Box
                            sx={{
                                height: 248,
                                width: "100%",
                                bgcolor: theme.palette.background.paper,
                                borderRadius: 8
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={4} sm={12} xs={12}
                        sx={{
                            padding: {md: "0 0 0 16px", sm: 'none'}
                        }}
                    >
                        <Box
                            sx={{
                                height: 248,
                                width: "100%",
                                bgcolor: theme.palette.background.paper,
                                borderRadius: 8
                            }}
                        >

                        </Box>
                    </Grid>
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

                </Box>

            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
                <Box
                    sx={{
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
                        mt: 1,
                        height: 400,
                        width: "100%",
                        bgcolor: theme.palette.background.paper,
                        borderRadius: 8
                    }}
                >

                </Box>
            </Grid>
        </Grid>
    );
}

export default DashboardPage;