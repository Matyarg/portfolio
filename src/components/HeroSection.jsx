import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Social from '../components/Social'
import Hidden from '@material-ui/core/Hidden'
import Zoom from '@material-ui/core/Zoom'
import { StaticImage } from 'gatsby-plugin-image'




const useStyles = makeStyles((theme) => ({
    section: {
        height: "90vh",
        userSelect: "none"
    },
    container: {
        height: "100%",

    },
    content: {
        height: "100%",
        zIndex: 100,
        position: "relative"
    },
    overlay: {
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "absolute",
        width: "100%",
        zIndex: 2,
    },
    heroImage: {
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "absolute",
        width: "100%",
        zIndex: 1,
    },
    buttons: {
        color: "#82837b",
        border: " 2px solid #82837b",
    }
}))


export default function HeroSection() {
    const styles = useStyles()
    const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true))

  return (
    <Paper className={styles.section}>
        <StaticImage className={styles.heroImage} src={"../images/background.jpg"} ></StaticImage>
        <div className={styles.overlay}></div>
        <Container className={styles.container} maxWidth="md">
            <Grid className={styles.content} container justifyContent='space-between' alignItems="center">
                <Zoom in={shouldShow}>
                    <Grid item sm={8}> 
                        <Typography component="h1" variant="h3">
                            Hi, my name is Matias and im a blockchain developer.   </Typography>
                        <Typography variant="h5"> I build apps, SPA and smart contracts</Typography>
                        <Box my={2}>
                            <Button href="mailto:matias.gim15@gmail.com" variant="outlined"
                            className={styles.buttons}>Get in Touch</Button> 
                        </Box>
                    </Grid>
                </Zoom>
                <Hidden xsDown>
                    <Grid item> 
                        <Social direction="column"/>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    </Paper>
  )
}
