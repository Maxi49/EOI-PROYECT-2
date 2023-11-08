import { Typography } from "@mui/material";
import { Box} from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: "#F26F23",
    },
  },
  typography: {
    h1: {
      fontSize: "2.1rem",
      ["@media (min-width:600px)"]: {
        fontSize: "2.4rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "3.4rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "6rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
    h2: {
      fontSize: "1.8rem",
      ["@media (min-width:600px)"]: {
        fontSize: "1.6rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "2.2rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "4rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
    h3: {
      fontSize: "1.4rem",
      ["@media (min-width:600px)"]: {
        fontSize: "1.6rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "2rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "4rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
    h4: {
      fontSize: "1.3rem",
      ["@media (min-width:600px)"]: {
        fontSize: "1.6rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "1.5rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "2rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
    h5: {
      fontSize: "1.2rem",
      ["@media (min-width:600px)"]: {
        fontSize: "1.6rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "1.5rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "1.7rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
    h6: {
      fontSize: "1.1rem",
      ["@media (min-width:600px)"]: {
        fontSize: "1.6rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "1.5rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "1.3rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
    subtitle2: {
      fontSize: "0.9rem",
      ["@media (min-width:600px)"]: {
        fontSize: "0.7rem",
      },
      ["@media (min-width:960px)"]: {
        fontSize: "0.75rem",
      },
      ["@media (min-width:1280px)"]: {
        fontSize: "0.85rem",
      },
      fontFamily: "Roboto, Arial, sans-serif",
    },
  },
});
const backGroundColor = "#000";
const datosRedesSociales = {
  WhatsApp: 41.2,
  Instagram: 11.8,
  TikTok: 47.1,
};

const datosTiempoUso = {
  "1-3hs": 11.8,
  "12hs en adelante": 11.8,
  "3-6hs": 17.6,
  "9-11hs": 17.6,
  "6-9hs": 41.2,
};

const Barra = ({ nombre, porcentaje }) => (
  <Box
    sx={{
      width: { xs: "80vw", md: "60vw" },
      maxWidth: "90vw",
      mb: 3,
      height: { xs: 50, md: 70 },
      backgroundColor: backGroundColor,
      position: "relative",
      borderRadius: 25,
      boxShadow: '0px 0px 12px 2px rgba(255, 255, 255, 0.6)'
    }}
  >
    <Box
      sx={{
        width: `${porcentaje * 1.5}%`,
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 25,
        transition: "width 2s",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          color: "White",
          margin: 0,
          fontSize: { xs: 16, md: 20 },
          fontWeight: 1000,
        }}
      >
        {nombre}: {porcentaje}%
      </Typography>
    </Box>
  </Box>
);

const Barras = ({ datos }) => (
  <Box sx={{ width: "100%" }}>
    {Object.entries(datos).map(([nombre, porcentaje]) => (
      <Barra key={nombre} nombre={nombre} porcentaje={porcentaje} />
    ))}
  </Box>
);

export function RedesSocialesChart() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Typography sx={{mb:10}} variant="h1" color={'white'} fontWeight={1000}>
          Red social mas usada
        </Typography>
        <div>
          <Barras datos={datosRedesSociales} />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export function TiempoUsoChart() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',}} >
        <Typography variant="h2" color={'white'} mb={10} fontWeight={1000}>
          Tiempo promedio de uso
        </Typography>
        <div>
          <Barras datos={datosTiempoUso} />
        </div>
      </Box>
    </ThemeProvider>
  );
}

/* */
