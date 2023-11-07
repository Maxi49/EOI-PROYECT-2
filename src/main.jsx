import React from 'react'
import ReactDOM from 'react-dom/client'
import { Start } from './Start'
import './styles.css'
import { Boxes } from './Boxes'
import { Header } from './Header'
import { BoxesTwo } from './secondBox/BoxesTwo'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Globalizacion } from './globalizacion/Globalizacion'
import { Revolucion } from './globalizacion/Revolucion'
import { Entrevista } from './entrevista/Entrevista'


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Header/>
      <Start/>
      <Boxes/>
      <BoxesTwo/>
      <Globalizacion/>
      <Revolucion/>
      <Entrevista/>
    </ThemeProvider>
  </React.StrictMode>,
)
