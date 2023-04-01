import React from 'react'
import GithubIcon from '@material-ui/icons/Github'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


function Project({title}) {
    return <Grid item>{title}</Grid> 
}

export default function ProjectSection() {
  return (
    <Container maxWidth="md">
        <Box mt={6} mb={2}>
        <Typography variant="m4" >Projects</Typography>
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
        imageUrl: "https://poke",
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
        imageUrl: "https://poke",
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
        imageUrl: "https://poke",
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
