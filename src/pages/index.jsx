import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import ProjectSection from '../components/ProjectSection'

const darktheme = createTheme({
  palette: {
    type: "dark"
  }
})


export default function index() {
  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
      </ThemeProvider>

  )
}
