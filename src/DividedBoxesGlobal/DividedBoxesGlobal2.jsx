import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { Box } from "@mui/system";
export const DividedBoxesGlobal2 = () => {
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
        fontSize: "2.5rem",
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
          gap: 10,
          width: { xs: "95vw", md: "35vw" },
          height: { xs: 700, sm: 300, md: 700, lg: 700 },
          boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              sx={{
                width: { xs: "80vw", md: "30vw" },
                color: "White",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Y tambien
            </Typography>
            <Typography
              variant={"subtitle1"}
              color={"white"}
              textAlign={"start"}
              sx={{
                width: { xs: "80vw", md: "20vw" },
                color: "#bdbcbe",
                fontWeight: 700,
              }}
            >
              <ul>
                <li>
                  <span style={{ color: "#9bbfdd", fontWeight: 1000 }}>
                    Big Data y Análisis Avanzado
                  </span>
                  <br />
                  La abundancia de datos ha impulsado el análisis de datos y la
                  toma de decisiones basada en datos, transformando industrias
                  como el marketing, la atención médica y la investigación.
                </li>
                <br />
                <li>
                  <span style={{ color: "#9bbfdd", fontWeight: 1000 }}>
                    Impacto en la Sociedad
                  </span>
                  <br />
                  La Cuarta Revolución Industrial ha tenido un impacto
                  significativo en la sociedad, generando oportunidades
                  económicas pero también desafíos, como la automatización de
                  empleos y preocupaciones sobre la privacidad de los datos.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
