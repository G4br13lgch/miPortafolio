import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from '../../components/Accordion'
export default function Experience(){
    return(
        <>
        <Container maxWidth='lg'>
        <Box>
            <Grid container sx={{height:'100vh'}} spacing={2} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <Typography variant="h1">Ep</Typography>
            </Grid>
            <Grid item>
                <Accordion/>
            </Grid>
            </Grid>                   
        </Box>
    </Container> 
        </>
    )
}