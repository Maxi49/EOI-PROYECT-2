import { Box, Container, ThemeProvider, createTheme } from "@mui/system";
import { useColorChangeOnView } from "../hook/useColorChangeOnView";
import { Typography } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const BoxesTwo = () => {
  const boxRefTwo = useColorChangeOnView("#b6dbd0", "#fbe274");
  const boxRefthree = useColorChangeOnView("#fbe274", "#fbe274");
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
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container
        ref={boxRefTwo}
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
            ¿Como afectan nuestro dia a dia?
          </Typography>
        </Box>
        <Box
          ref={boxRefthree}
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
                Que son
              </Typography>
              <Typography
                variant={"h5"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#bdbcbe",
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
      </Container>
    </ThemeProvider>
  );
};
