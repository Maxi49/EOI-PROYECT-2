import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { DividedBoxes1 } from "../src/DividedBoxes/DividedBoxes1";
import { DividedBoxes2 } from "../src/DividedBoxes/DividedBoxes2";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useColorChangeOnView } from "./hook/useColorChangeOnView";
export const Boxes = () => {
  const boxRef = useColorChangeOnView("#b6dbd0");

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
          fontSize: "3.5rem",
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
            backgroundColor: "#b6dbd0", // Color original del componente Box
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
            ¿Del consumo al{" "}
            <span style={{ color: "#19624c", fontWeight: 1000 }}>
              consumismo
            </span>
            ?
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
            Todo esto tiene que ver con un apartado psicologico
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
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 930, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(2, 2, 2, 0.9)"
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
                El porque de su uso
              </Typography>
              <Typography
                variant={"h4"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#bdbcbe",
                  fontWeight: 700,
                }}
              >
                <ul>
                  <li>Presion por aceptacion social</li>
                  <br />
                  <li>Comparacion Social</li>
                  <br />
                  <li>Efectos en el autoestima</li>
                  <br />
                  <li>Dopamina constante</li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80%", sm: "50%", md: "40%" } }}>
            <img
              src="../undraw_social_sharing_re_pvmr.svg"
              className="wrong"
              alt="img"
            />
          </Box>
        </Box>

        {/*divided boxes*/}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          <DividedBoxes1 />
          <DividedBoxes2 />
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
            gap: { xs: 10, md: 20 },
            mt: 10,
            mb: 5,
            width: { xs: "95vw", md: "70vw" },
            height: { xs: 1000, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)"
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
                  backgroundColor: "black",
                  borderRadius: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ThumbUpOffAltIcon fontSize="large" sx={{ color: "white" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{
                  width: { xs: "80vw", md: "30vw" },
                  color: "Black",
                  fontWeight: 700,
                }}
              >
                Efectos positivos del{" "}
                <span style={{ color: "#00b900", fontWeight: 1000 }}>
                  consumo
                </span>
              </Typography>
              <Typography
                variant={"h6"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#474747",
                  fontWeight: 700,
                }}
              >
                <ul>
                  <li>Conciencia del consumo responsable</li>
                  <br />
                  <li>Desarrollo de habilidades criticas</li>
                  <br />
                  <li>Oportuidades empresariales</li>
                  <br />
                  <li>Entretenimiento</li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "50%", sm: "50%", md: "30%" } }}>
            <img
              src="../undraw_completed_m9ci.svg"
              alt="img"
              className="wrong"
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
            height: { xs: 950, sm: 1000, md: 700, lg: 900 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)"
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
                  backgroundColor: "black",
                  borderRadius: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FmdBadOutlinedIcon fontSize="large" sx={{ color: "white" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{
                  width: { xs: "80vw", md: "30vw" },
                  color: "Black",
                  fontWeight: 700,
                }}
              >
                Efectos negativos del{" "}
                <span style={{ color: "#b90000" }}>consumismo</span>
              </Typography>
              <Typography
                variant={"h5"}
                color={"white"}
                textAlign={"start"}
                sx={{
                  width: { xs: "80vw", md: "20vw" },
                  color: "#474747",
                  fontWeight: 700,
                }}
              >
                <ul>
                  <li>Adiccion a la pantalla</li>
                  <br />
                  <li>Aislamiento Social</li>
                  <br />
                  <li>Perdida de la paciencia</li>
                  <br />
                  <li>Sobrecarga de informacion</li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "70%", sm: "50%", md: "40%" } }}>
            <img
              src="../undraw_access_denied_re_awnf.svg"
              alt="img"
              className="wrong"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
