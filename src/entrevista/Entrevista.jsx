import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorChangeOnView } from "../hook/useColorChangeOnView";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { Box, Container, Typography } from "@mui/material";

export const Entrevista = () => {
  const boxRef = useColorChangeOnView("#000");
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
          fontSize: "2.8rem",
        },
        ["@media (min-width:1440px)"]: {
          fontSize: "3rem",
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
          fontSize: "1rem",
        },
        ["@media (min-width:960px)"]: {
          fontSize: "0.86rem",
        },
        ["@media (min-width:1280px)"]: {
          fontSize: "0.9rem",
        },
        ["@media (min-width:1440px)"]: {
          fontSize: "1rem",
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000", // Color original del componente Box
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
            <span style={{ color: "#a1a1a1", fontWeight: 1000 }}>La </span>
            <span style={{ color: "#fff", fontWeight: 1000 }}>Entrevista</span>
          </Typography>
          <Typography
            variant="h2"
            color={"white"}
            textAlign={"start"}
            sx={{
              width: { xs: "80vw", md: "60vw" },
              color: "#fff",
              fontWeight: 400,
              mt: 2,
            }}
          >
            a un profesional en psicología
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
            height: { xs: 860, sm: 800, md: 900, lg: 900 },
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
                <PsychologyIcon fontSize="large" sx={{ color: "white" }} />
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
                Explorando la Entrevista
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
                En nuestra entrevista con la licenciada en psicología Cecilia
                Elena Medina, de la institución Nodos, exploramos el impacto del
                consumo de Tecnologías de la Información y Comunicación (TICs)
                en los adolescentes de entre 13 a 18 años en la ciudad de Río
                Cuarto.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "50%", md: "40%" } }}>
            <img
              src="../../undraw_solution_mindset_re_57bf.svg"
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
            height: { xs: 1300, sm: 1200, md: 1200, lg: 1200 },
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
                <PsychologyAltIcon fontSize="large" sx={{ color: "white" }} />
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
                ¿Que nos contó?
              </Typography>
              <Typography
                variant={"subtitle2"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#555555",
                  fontWeight: 700,
                }}
              >
                <span style={{ color: "#000", fontWeight: "800px" }}>
                  Efectos psicológicos de las TICs en adolescentes
                </span>
                <br />
                El consumo frecuente de TICs afecta negativamente la autoestima
                de los adolescentes, quienes comparan su popularidad en función
                de likes y seguidores, lo que puede provocar ansiedad y
                depresión.
                <br />
                <br />
                <span style={{ color: "#000", fontWeight: "800px" }}>
                  Factores de Influencia
                </span>
                <br />
                Los adolescentes son influenciados principalmente por sus amigos
                en línea, siguiendo tendencias digitales para mantenerse
                actualizados y obtener aprobación.
                <br />
                <br />
                <span style={{ color: "#000", fontWeight: "800px" }}>
                  Manipulación en el consumo de TICs
                </span>
                <br />
                La manipulación es común en esta etapa, con adolescentes
                copiando comportamientos y hábitos de sus pares en línea.
                <br />
                <br />
                <span style={{ color: "#000", fontWeight: "800px" }}>
                  Diferencias según la clase social
                </span>
                <br />
                La influencia de las TICs varía según la clase social, con
                adolescentes de clase alta mostrando estatus, los de clase media
                aspirando a ello y los de clase baja manteniendo un perfil bajo
                debido a limitaciones económicas.
                <br />
                <br />
                <span style={{ color: "#000", fontWeight: "800px" }}>
                  Papel del factor económico y cultural <br />
                </span>
                El factor económico y cultural es fundamental, ya que aquellos
                con más recursos pueden exhibir su estilo de vida, lo que puede
                generar en otros la envidia y el deseo de emularlo.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "50%", md: "35%" } }}>
            <img
              src="../../undraw_meeting_re_i53h.svg"
              alt="img"
              className="wrong"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
