import { Start } from "./Start";
import "./styles.css";
import { Boxes } from "./Boxes";
import { Header } from "./Header";
import { BoxesTwo } from "./secondBox/BoxesTwo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Globalizacion } from "./globalizacion/Globalizacion";
import { Revolucion } from "./globalizacion/Revolucion";
import { Entrevista } from "./entrevista/Entrevista";
import { Estadistica } from "./entrevista/Estadistica";
import { Final } from "./final/Final";


const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Header/>
        <Start/>
        <Boxes/>
        <BoxesTwo />
        <Globalizacion />
        <Revolucion />
        <Entrevista />
        <Estadistica />
        <Final />
    </ThemeProvider>
  );
};
