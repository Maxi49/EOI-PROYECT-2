import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorChangeOnView } from "../hook/useColorChangeOnView";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
export const Final = () => {
  const boxRef = useColorChangeOnView("#000");

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.5rem",
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
          mt: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000", // Color original del componente Box
            width: { xs: "95vw", md: "70vw" },
            height: { xs: "200px", md: 700 },
            borderRadius: 10,
            justifyContent: "center",
            textAlign: "start",
            alignItems: "center",
          }}
          component={"section"}
        >
          <Typography
            variant={"h1"}
            color={"black"}
            textAlign={"center"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "white",
              fontWeight: 700,
            }}
          >
            <span style={{ fontWeight: 1000 }}>
              Gracias por leer
            </span>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
