import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { Box } from "@mui/system";
export const DividedBoxesGlobal1 = () => {
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
        fontSize: "2.2rem",
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
              Esta trajo
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
                    Tecnologías Disruptivas
                  </span>
                  <br />
                  La adopción de tecnologías como la inteligencia artificial,
                  automatización, robótica, impresión 3D y realidad virtual ha
                  transformado cómo las empresas operan y cómo las personas
                  realizan sus actividades diarias.
                </li>
                <br />
                <li>
                  <span style={{ color: "#9bbfdd", fontWeight: 1000 }}>
                    Conectividad Global
                  </span>
                  <br />
                  La expansión de Internet y las redes de comunicación ha
                  permitido una comunicación global instantánea,
                  independientemente de la ubicación geográfica.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
