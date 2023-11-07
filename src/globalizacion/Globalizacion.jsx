import { Box, Container, ThemeProvider, createTheme } from "@mui/system";

import { Typography } from "@mui/material";
import { useColorChangeOnView } from "../hook/useColorChangeOnView";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LanguageIcon from "@mui/icons-material/Language";
export const Globalizacion = () => {
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
    },
  });
  const boxRef = useColorChangeOnView("#bec7e7");
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
            backgroundColor: "#bec7e7", // Color original del componente Box
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
            variant={"h1"}
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "black",
              fontWeight: 700,
            }}
          >
            La{" "}
            <span style={{ color: "#6d59ea", fontWeight: 1000 }}>
              Globalizacion
            </span>
          </Typography>
          <Typography
            variant="h2"
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "black",
              fontWeight: 400,
              mt: 2,
            }}
          >
            Una nueva era
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            direction: "row",
            backgroundColor: "#6d59ea",
            borderRadius: 10,
            gap: 2,
            mb: 10,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 860, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)"
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
                <TravelExploreIcon fontSize="large" sx={{ color: "white" }} />
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
                ¿Que es?
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
                La globalización se refiere a la creciente interconexión e
                interdependencia de las economías, sociedades y culturas de todo
                el mundo. Este fenómeno ha sido impulsado por avances en
                tecnología de la información y comunicación, transporte,
                comercio internacional y flujo de información.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "90%", sm: "50%", md: "40%" } }}>
            <img
              src="../../undraw_world_re_768g.svg"
              className="wrong"
              alt="img"
            />
          </Box>
        </Box>
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            direction: "row",
            backgroundColor: "white",
            borderRadius: 10,
            gap: 10,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 910, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)"
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
                <LanguageIcon fontSize="large" sx={{ color: "white" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{
                  width: { xs: "80vw", md: "30vw" },
                  color: "black",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                De que se trato?
              </Typography>
              <Typography
                variant={"h5"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#555555",
                  fontWeight: 700,
                }}
              >
                La globalización es un fenómeno que ha transformado la forma en
                que el mundo se conecta, comunica y opera. Este proceso de
                interconexión global ha sido impulsado en gran medida por
                avances tecnológicos, y uno de los aspectos más destacados de
                esta globalización es la Cuarta Revolución Industrial.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "50%", md: "35%" } }}>
            <img
              src="../../undraw_the_world_is_mine_re_j5cr.svg"
              alt="img"
              className="wrong"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
