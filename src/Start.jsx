import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import { useColorChangeOnView } from "./hook/useColorChangeOnView";



const typo = createTheme();

typo.typography.h2 = {
  fontSize: "2.4rem",
  [typo.breakpoints.up("sm")]: {
    fontSize: "2.4rem",
  },
  [typo.breakpoints.up("md")]: {
    fontSize: "3.4rem",
  },
  [typo.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
  fontFamily: "Roboto, Arial, sans-serif",
};
typo.typography.h6 = {
  fontSize: "1.2rem",
  [typo.breakpoints.up["sm"]]: {
    fontSize: "1.6rem",
  },
  [typo.breakpoints.up["md"]]: {
    fontSize: "2.2rem",
  },
  [typo.breakpoints.up["lg"]]: {
    fontSize: "3rem",
  },
  fontFamily: "Roboto, Arial, sans-serif",
};

export const Start = () => {
  const boxRef = useColorChangeOnView("#000");
  return (
    <ThemeProvider theme={typo}>
      <Container

        component={'section'}
        maxWidth="md"
        sx={{
          marginTop: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: 800, md: 900 },
          mb: 5,
        }}
      >
        <Box
        ref={boxRef}
          className="start"
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            mb: 5,
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            mb={3}
            sx={{ textAlign: "center", color: "white" }}
          >
            El <span style={{color:deepPurple["A400"]}}>consumo</span> de las <span style={{color:deepPurple["A400"]}} >redes sociales</span>
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center", color: "white" }}>
            ¿Porque nos afecta tanto?
          </Typography>
        </Box>
        <Box
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            mb: 5,
            mt: 5,
            justifyContent: "center",
            width: "90vw",
          }}
        >
          <Typography
            variant="subtitle2"
            mb={3}
            sx={{
              textAlign: { xs: "start", md: "center" },
              color: "white",
              width: "80vw",
            }}
          >
            En esta pagina se expondran datos sobre el uso de las redes
            sociales obtenidos desde encuestas a personas de entre 16 a 18 años
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
