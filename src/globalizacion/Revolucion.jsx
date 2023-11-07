import { Box, Container, ThemeProvider, createTheme } from "@mui/system";

import { Typography } from "@mui/material";
import { useColorChangeOnView } from "../hook/useColorChangeOnView";
import BuildIcon from "@mui/icons-material/Build";
import { DividedBoxesGlobal1 } from "../DividedBoxesGlobal/DividedBoxesGlobal1";
import { DividedBoxesGlobal2 } from "../DividedBoxesGlobal/DividedBoxesGlobal2";
export const Revolucion = () => {
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
        fontSize: "2rem",
        ["@media (min-width:600px)"]: {
          fontSize: "1.6rem",
        },
        ["@media (min-width:960px)"]: {
          fontSize: "3rem",
        },
        ["@media (min-width:1280px)"]: {
          fontSize: "5rem",
        },
        fontFamily: "Roboto, Arial, sans-serif",
      },
    },
  });
  const boxRef = useColorChangeOnView("#1b2228");
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
            backgroundColor: "#1b2228", // Color original del componente Box
            width: { xs: "95vw", md: "70vw" },
            height: { xs: "300px", md: 600 },
            borderRadius: 10,
            mb: 5,
            justifyContent: "center",
            textAlign: "start",
            alignItems: "center",
          }}
          component={"section"}
        >
          <Typography
            variant={"subtitle2"}
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "white",
              fontWeight: 700,
            }}
          >
            La cuarta {" "}
            <span style={{ color: "#9bbfdd", fontWeight: 1000 }}>
              Revolucion Industrial
            </span>
          </Typography>
          <Typography
            variant="h2"
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "white",
              fontWeight: 400,
              mt: 2,
            }}
          >
            Un cambio rotundo
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            direction: "row",
            backgroundColor: "#4eb2da",
            borderRadius: 10,
            gap: 2,
            mb: 10,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 800, sm: 1000, md: 700, lg: 790 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  padding: 1,
                  marginBottom: 5,
                  width: { xs: 60, md: 70 },
                  height: { xs: 60, md: 70 },
                  backgroundColor: "black",
                  borderRadius: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BuildIcon fontSize="large" sx={{ color: "white" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{
                  width: { xs: "80vw", md: "30vw" },
                  color: "#fff",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                ¿Que fue?
              </Typography>
              <Typography
                variant={"h5"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "rgba(255, 255, 255, .7)",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                La Cuarta Revolución Industrial fue una etapa de avance
                tecnológico que ha llevado a la convergencia de tecnologías
                digitales, físicas y biológicas. Ha transformado la forma en que
                vivimos, trabajamos y nos relacionamos. 
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "40%", md: "30%" } }}>
            <img
              src="../../undraw_firmware_re_fgdy.svg"
              className="wrong"
              alt="img"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          <DividedBoxesGlobal1 />
          <DividedBoxesGlobal2/>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
