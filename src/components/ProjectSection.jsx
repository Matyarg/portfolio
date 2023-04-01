import React from 'react'
import GithubIcon from '@material-ui/icons/Github'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import Hidden from '@material-ui/core/Hidden'




const useStyles = makeStyles((theme) => ({
    cardMedia: {
        width: 180,
    },
    card: {
        display:"flex",
    },
    links: {
        marginRight: "auto",
    },
    tags: {
        marginRight: 5,
        marginBottom: 5,
    }

}))

function TagsContainer({tags}){
    const styles = useStyles()
    return (
        <div>
            {tags.map((tag) => (
            <Chip className= {styles.tags} label={tag} variant="outlined" key={tag}></Chip>
        ))}
    </div>
    )
}


function Project({title, description, imageAlt, imageUrl, tags, links}) {
    const styles = useStyles()
    return <Grid item>
        <Card className={styles.card}>
                <div>
            <CardContent> 
                        <Typography variant='h5' paragraph> {title} </Typography> 
                        <Typography variant='subtitle1' paragraph> {description} </Typography> 
                        <Hidden mdUp>
                            <TagsContainer tags={tags}></TagsContainer>
                        </Hidden>
                    </CardContent>
                    <CardActions>
                        <div className={styles.links}>
                            {links.map((linkItem) => (
                                <IconButton href={linkItem.href} key={linkItem.href}>
                                    <linkItem.icon></linkItem.icon>
                                </IconButton>
                            ))} 
                        </div>
                        <Hidden smDown>
                            <TagsContainer tags={tags}></TagsContainer>
                        </Hidden>
                    </CardActions>
                </div>
                <Hidden xsDown>
                    <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
                </Hidden>
            </Card>
        </Grid> 
}

export default function ProjectSection() {
  return (
    <Container  maxWidth="md" id="projects">
        <Box pt={6} mb={4}>
        <Typography  component="h1" variant="m4" >Projects</Typography>
        </Box>
        <Grid container direction="column" spacing={4}>
            {projectsData.map((data) => (
                <Project {...data}></Project>
            ))}
        </Grid>
    </Container>
  )
}

const projectsData = [
    {
        title: "PokeApi",
        description: "una SPA consumiendo la API de pokemon",
        imageUrl: "https://cdn130.picsart.com/235441487071212.png",
        imageAlt: "pokemon image project",
        tags: ["React.js", "Material-UI", "Gastby.js"],
        links: [
            {
                icon: GithubIcon,
                href: "https://www.github.com/matyarg",
            },
            {
                icon: OpenInNewIcon,
                href: "link al deploy"
            }
        ]
    },
    {
        title: "crud project",
        description: "una SPA consumiendo la API de pokemon",
        imageUrl: "https://cdn130.picsart.com/235441487071212.png",
        imageAlt: "pokemon image project",
        tags: ["React.js", "Material-UI", "Gastby.js"],
        links: [
            {
                icon: GithubIcon,
                href: "https://www.github.com/matyarg",
            },
            {
                icon: OpenInNewIcon,
                href: "link al deploy"
            }
        ]
    },
    {
        title: "techbunny",
        description: "una SPA consumiendo la API de pokemon",
        imageUrl: "https://cdn130.picsart.com/235441487071212.png",
        imageAlt: "pokemon image project",
        tags: ["React.js", "Material-UI", "Gastby.js"],
        links: [
            {
                icon: GithubIcon,
                href: "https://www.github.com/matyarg",
            },
            {
                icon: OpenInNewIcon,
                href: "link al deploy"
            }
        ]
    }
]
