import React, {useState} from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/divider'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


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
    const [open, setOpen] = useState(false)


  return (
    <AppBar position='sticky' color='default' >
        <Container maxWidth="md">
            <Toolbar disableGutters>
            <Avatar className={styles.avatar}> M </Avatar>
            <Hidden xsDown>
                {navegationLinks.map((link) => (
                    <Link 
                        className= {styles.link}
                        color="textPrimary"
                        variant='button'
                        underline='none'
                        href={link.href}
                        > {link.name} 
                    </Link>))}
            </Hidden>
            <Hidden smUp>
                    <IconButton>
                        <MenuIcon onClick={() => setOpen(true)} />
                    </IconButton>
            </Hidden>
            <SwipeableDrawer anchor="right" open={open} onOpen={true} onClose={false}>
                <div>
                    <IconButton>
                        <ChevronRightIcon onClick={() => setOpen(false)} />
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {navegationLinks.map((link) => (
                        <ListItem>
                            <Link 
                                className= {styles.link}
                                color="textPrimary"
                                variant='button'
                                underline='none'
                                href={link.href}
                                > {link.name} 
                            </Link>
                        </ListItem>
                        ))}
                        
                </List>
            </SwipeableDrawer>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
