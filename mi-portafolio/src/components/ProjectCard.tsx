import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
interface Project {
    id:number,
    title:string,
    img:string
}
export default function ProjectCard(project:Project){
    const router = useRouter()
    return(
        <>
        <Card>
            <CardMedia sx={{height:200}} image={project.img}></CardMedia>
            <CardContent>
                <Typography variant="h6">{project.title}</Typography>
            </CardContent>
            <CardActions>
                <Grid container item justifyContent={"flex-end"}>
                    <Button onClick={()=>{router.push(`/projects/${project.id}/`)}} size="small" variant="outlined">Ver más</Button>
                </Grid>
            </CardActions>
        </Card>
        </>
    )
}