"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
interface Project {
    id:number,
    title:string,
    img:string
}
const projects:Project[] = [
    {id:1,title:'Sistema gestor de requisiciones',img:'/sgc/sgc2.jpg'},
    {id:2,title:'Sistema de ordenes de compra',img:'/teintmex/teintmex2.jpg'},
    {id:3,title:'App movil de ventas',img:'/appVentas/appMovil1.jpeg'}
]
export default function PageProjects(){
    const router = useRouter()
    return(
        <Container maxWidth='lg'>
            <Box>
                <Grid container spacing={2} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Pro</Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        {projects.map((project)=>(
                            <Grid key={project.id} item sm={12} lg={4}>
                                <ProjectCard key={project.id} id={project.id} img={project.img} title={project.title}></ProjectCard>
                            </Grid>
                        ))}                                       
                    </Grid>                
                </Grid>                   
            </Box>
        </Container> 
    )
}