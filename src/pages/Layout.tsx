import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import Navbar from '../components/Navbar'
import { GlobalContext } from '../context/GlobalContext'

function Layout () {
  const { isDarkMode } = useContext(GlobalContext)

  interface ThemeProps {
    primary: String,
    secondary: String,
    background: String,
    hover: String,
    wrapperColor: String,
  }

  const darkTheme: ThemeProps = {
    primary: 'rgba(255, 255, 255, 0.87)',
    background: '#3f3e3e',
    secondary: '#a7a7a7',
    hover: '#a7a7a7ae',
    wrapperColor: '#3f3e3e',
  }

  const lightTheme: ThemeProps = {
    primary: '#242424',
    background: 'rgba(255, 255, 255, 0.87)',
    secondary: '#555555',
    hover: '#55555578',
    wrapperColor: 'rgba(192, 192, 192)',
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Navbar />
        <Outlet />
    </ThemeProvider>
  )
}

export default Layout