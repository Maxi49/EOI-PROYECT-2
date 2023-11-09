import { Box, Container, ThemeProvider, createTheme } from "@mui/system";

import { Typography } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { DividedBoxesTic1 } from "../DividedBoxesTics/DividedBoxesTic1";
import { DividedBoxesTic2 } from "../DividedBoxesTics/DividedBoxesTic2";
import { useColorChangeOnView } from "../hook/useColorChangeOnView";
export const BoxesTwo = () => {
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
        ["@media (min-width:1100px)"]: {
          fontSize: "2rem",
        },
        ["@media (min-width:1300px)"]: {
          fontSize: "3rem",
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
          fontSize: "1rem",
        },
        ["@media (min-width:1100px)"]: {
          fontSize: "1.1rem",
        },
        ["@media (min-width:1300px)"]: {
          fontSize: "1.6rem",
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
  const boxRef = useColorChangeOnView("#fbe274");
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fbe274", // Color original del componente Box
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
            Las <span style={{ color: "#e99f30", fontWeight: 1000 }}>Tics</span>
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
            ¿Cómo afectan nuestro día a día?
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
            gap: 2,
            mb: 10,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 930, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  padding: 1,
                  marginBottom: 5,
                  width: 50,
                  height: 50,
                  backgroundColor: "white",
                  borderRadius: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <QuestionMarkIcon fontSize="large" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{
                  width: { xs: "80vw", md: "30vw" },
                  color: "White",
                  fontWeight: 700,
                }}
              >
                ¿Qué son?
              </Typography>
              <Typography
                variant={"h5"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#9b9b9b",
                  fontWeight: 700,
                }}
              >
                Las TICs se definen como un conjunto de tecnologías que
                involucra computadoras, dispositivos móviles, sistemas de
                información y redes sociales. Estas tecnologías se utilizan para
                el procesamiento, transmisión y almacenamiento de información en
                la sociedad moderna. Han revolucionado la comunicación, el
                acceso a la información y la forma en que vivimos
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "50%", md: "40%" } }}>
            <img
              src="../../undraw_design_notes_re_eklr.svg"
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
            mb: 10,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 1000, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)",
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
                <AccountBalanceIcon fontSize="large" sx={{ color: "white" }} />
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
                Relación con el{" "}
                <span style={{ color: "#009FFF" }}>Mercado</span>
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
                Las TICs han revolucionado el comercio, permitiendo a las
                empresas llegar a consumidores globales en línea. Transacciones
                electrónicas comunes y publicidad personalizada han transformado
                la dinámica del mercado, impulsando la interconexión global en
                la sociedad de consumo.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "50%", md: "35%" } }}>
            <img
              src="../../undraw_stock_prices_re_js33 (1).svg"
              alt="img"
              className="wrong"
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
          <DividedBoxesTic1 />
          <DividedBoxesTic2 />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
