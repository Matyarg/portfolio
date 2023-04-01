import React from 'react'
import GithubIcon from '@material-ui/icons/Github'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


export default function ProjectSection() {
  return (
    <Container>
        <Grid container>
            {projectsData.map((data) => (
                <Grid>{data.title}</Grid> 
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
