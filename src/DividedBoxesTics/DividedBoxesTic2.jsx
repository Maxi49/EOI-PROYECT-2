import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { Box } from "@mui/system";
export const DividedBoxesTic2 = () => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "2.2rem",
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
        fontSize: "1.2rem",
        ["@media (min-width:600px)"]: {
          fontSize: "1.6rem",
        },
        ["@media (min-width:960px)"]: {
          fontSize: "2.2rem",
        },
        ["@media (min-width:1280px)"]: {
          fontSize: "2rem",
        },
        fontFamily: "Roboto, Arial, sans-serif",
      },
      h3: {
        fontSize: "3.2rem",
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
        fontSize: "2rem",
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
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          direction: "row",
          backgroundColor: "#000",
          borderRadius: 10,
          width: { xs: "95vw", md: "35vw" },
          height: { xs: 500, sm: 300, md: 700, lg: 600 },
          boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h3"
              sx={{
                width: { xs: "80vw", md: "30vw" },
                color: "white",
                fontWeight: 700,
              }}
            >
              Venta
            </Typography>
            <Typography
              variant={"h6"}
              color={"white"}
              textAlign={"start"}
              sx={{
                width: { xs: "80vw", md: "20vw" },
                color: "#bdbcbe",
                fontWeight: 700,
              }}
            >
              En la venta, las TICs han impulsado el comercio electrónico,
              permitiendo a las empresas llegar a consumidores globales. Además,
              han transformado la publicidad al permitir anuncios personalizados
              y dirigidos a audiencias específicas.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
