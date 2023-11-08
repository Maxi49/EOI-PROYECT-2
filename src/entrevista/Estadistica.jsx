import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useColorChangeOnView } from "../hook/useColorChangeOnView";
import { RedesSocialesChart, TiempoUsoChart } from "./NormalChart";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { Container } from '@mui/system';
export const Estadistica = () => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "2.6rem",
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
          fontSize: "4rem",
        },
        fontFamily: "Roboto, Arial, sans-serif",
      },
      h3: {
        fontSize: "2.2rem",
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
  const boxRef = useColorChangeOnView("#F26F23");
  return (
    <ThemeProvider theme={theme}>
      <Container
        ref={boxRef}
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F26F23", // Color original del componente Box
            width: { xs: "95vw", md: "70vw" },
            height: { xs: "300px", md: 600 },
            borderRadius: 10,
            justifyContent: "center",
            textAlign: "start",
            alignItems: "center",
          }}
          component={"section"}
        >
          <Typography
            variant={"h1"}
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "black",
              fontWeight: 700,
            }}
          >
            <span style={{ color: "Black", fontWeight: 1000 }}>
              Estadisticas y Datos
            </span>
          </Typography>
          <Typography
            variant="h4"
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "#fff",
              fontWeight: 400,
              mt: 2,
            }}
          >
            Obtenidos desde una encuesta
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            direction: "row",
            backgroundColor: "black",
            borderRadius: 10,
            gap: 10,
            mb: 10,
            mt:5,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 600, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(2, 2, 2, 0.9)"
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  marginBottom: 5,
                  width: 60,
                  height: 60,
                  backgroundColor: "white",
                  borderRadius: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Groups2OutlinedIcon fontSize="large" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              < RedesSocialesChart/>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            direction: "row",
            backgroundColor: "black",
            borderRadius: 10,
            gap: 10,
            mb: 10,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 700, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(2, 2, 2, 0.9)"
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  marginBottom: 5,
                  width: 55,
                  height: 55,
                  backgroundColor: "white",
                  borderRadius: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon fontSize="large" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              < TiempoUsoChart/>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
