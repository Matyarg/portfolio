import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Container } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const navegationLinks = [
    { name: "About", href:"" },
    { name: "Resume", href:"h" },
    { name: "Projects", href:"" },
]

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    avatar: {
        marginRight: "auto",
        color: "white",
        backgroundColor: "black",
        height: 35,
        width: 35,
        borderRadius: 450,
        border: "2px solid #7e33b7",

    }
}))

export default function Header() {
    const styles = useStyles()
  return (
    <AppBar position='sticky' color='default' >
        <Container maxWidth="md">
            <Toolbar disableGutters>
            <Avatar className={styles.avatar}> M </Avatar>
            {navegationLinks.map((link) => (
                <Link 
                className= {styles.link}
                color="textPrimary"
                variant='button'
                underline='none'
                href={link.href}
                > {link.name} 
                </Link>))}
            </Toolbar>
        </Container>
    </AppBar>
  )
}
