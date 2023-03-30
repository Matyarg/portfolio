import React from 'react'
import Paper from '@material-ui/core/paper'
import { makeStyles } from '@material-ui/core/styles'
import fondo from "../images/background.jpg"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Social from '../components/Social'


const useStyles = makeStyles((theme) => ({
    section: {
        height: "90vh",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    container: {
        height: "100%",

    },
    content: {
        height: "100%"
    },
}))


export default function HeroSection() {
    const styles = useStyles()
  return (
    <Paper className={styles.section}>
        <Container className={styles.container} maxWidth="md">
            <Grid className={styles.content} container justifyContent='space-between' alignItems="center">
                <Grid item sm={8}> 
                    <Typography component="h1" variant="h3">
                        Hi, my name is Matias and im a blockchain developer.   </Typography>
                    <Typography variant="h5"> I build apps, SPA and smart contracts</Typography>
                    <Box my={2}>
                        <Button href="mailto:matias.gim15@gmail.com" variant="outlined" color="primary">Get in Touch</Button> 
                    </Box>
                </Grid>
                <Grid item> <Social/></Grid>
            </Grid>
        </Container>
    </Paper>
  )
}
