import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
export default function Inicio(){
  return(
    <>
      <Container maxWidth='lg'>
        <Box>
            <Grid container sx={{height:'100vh'}} spacing={2} direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                {/* <Typography variant="h1">Gabriel Campos</Typography> */}
                Title
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  Sub title
                  {/* Desarrollador web full stack */}
                </Typography>
              </Grid>
            </Grid>                   
        </Box>
      </Container>      
    </>
  )
}