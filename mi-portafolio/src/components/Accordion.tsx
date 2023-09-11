"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid,Card,CardHeader,CardContent,CardActions, Icon, Chip, Button} from '@mui/material/'
import Image from 'next/image';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Grid container justifyContent={"space-between"} marginLeft={2} marginRight={2}>
                <Grid item>
                    <Typography variant='h6'> Desarrollador Web Full Stack @Empacadora Hass Tag</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>2020 - Actualidad</Typography>
                </Grid>
            </Grid>                    
        </AccordionSummary>
        <AccordionDetails>
        <Card elevation={0}>
            <CardHeader title={""}></CardHeader>
            <CardContent>
                <Grid container direction={"row"}>
                    <Grid item xs={2}>
                        <Image src={"/logoHassTag.png"} alt='Hass Tag' width={100} height={100} layout='responsive'></Image>                       
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Typography variant='h6'>
                                    Desarrollo de soluciones web full stack haciendo uso de tecnologias como React JS, Node JS
                                </Typography>
                            </Grid>
                            <Grid item container spacing={1} direction={"row"}>
                                <Grid item>
                                    <Chip label="JavaScript"></Chip>
                                </Grid>    
                                <Grid item>
                                    <Chip label="React JS"></Chip>
                                </Grid>        
                                <Grid item>
                                    <Chip label="Redux"></Chip>
                                </Grid> 
                                <Grid item>
                                    <Chip label="Node JS"></Chip>
                                </Grid>    
                                <Grid item>
                                    <Chip label="Express"></Chip>
                                </Grid>   
                                <Grid item>
                                    <Chip label="SQL Server"></Chip>
                                </Grid>                    
                            </Grid>                            
                        </Grid>                        
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                    <Grid item>                        
                        <Typography variant='body1'>Uruapan, Michoacán</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained'>Proyectos</Button>
                    </Grid>                    
                </Grid>                
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <Grid container justifyContent={"space-between"} marginLeft={2} marginRight={2}>
                <Grid item>
                    <Typography variant='h6'> Desarrollador Web Full Stack y Movil @Freelancer</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>2019 - 2020</Typography>
                </Grid>
            </Grid>  
        </AccordionSummary>
        <AccordionDetails>
          <Card elevation={0}>
            <CardHeader title={""}></CardHeader>
            <CardContent>
                <Grid container direction={"row"}>
                    <Grid item xs={2}>
                        <Image src={"/freelancer.png"} alt='Hass Tag' width={100} height={100} layout='responsive'></Image>                       
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Typography variant='h6'>
                                    Colaboración para el desarrollo de un sistema web gestor de requisiciones usando ReactJS, Node JS y MySQL
                                </Typography>
                                <Typography variant='h6'>
                                    Desarrollo de una app movil para ventas e inventario usando Kotlin, Node JS y MySQL
                                </Typography>
                            </Grid>
                            <Grid item container spacing={1} direction={"row"}>
                                <Grid item>
                                    <Chip label="JavaScript"></Chip>
                                </Grid>  
                                <Grid item>
                                    <Chip label="Kotlin"></Chip>
                                </Grid>    
                                <Grid item>
                                    <Chip label="React JS"></Chip>
                                </Grid>        
                                <Grid item>
                                    <Chip label="Redux"></Chip>
                                </Grid> 
                                <Grid item>
                                    <Chip label="Node JS"></Chip>
                                </Grid>    
                                <Grid item>
                                    <Chip label="Express"></Chip>
                                </Grid>   
                                <Grid item>
                                    <Chip label="MySQL"></Chip>
                                </Grid>                    
                            </Grid>                            
                        </Grid>                        
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                    <Grid item>
                        <Typography variant='body1'>Remoto</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained'>Proyectos</Button>
                    </Grid>                    
                </Grid>                
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>      
    </div>
  );
}