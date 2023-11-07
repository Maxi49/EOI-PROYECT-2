import { ThemeProvider, Typography, createTheme } from '@mui/material'
import { Box } from '@mui/system'
export const DividedBoxes1 = () => {

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
        fontSize: "3.4rem",
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
            backgroundColor: "#004a8f",
            borderRadius: 10,
            gap: 10,
            width: { xs: "95vw", md: "35vw" },
            height: { xs:500, sm:300, md: 700, lg:600 },
            boxShadow: "0px 4px 6px rgba(0,0, 0, 0.4)"
          }}
        >
          <Box sx={{ display: "flex", flexDirection:{xs:'column'}}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{
                  width: { xs: "80vw", md: "30vw" },
                  color: "White",
                  fontWeight: 700,
                }}
              >
                Consumo
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
                El consumo se refiere a la adquisicion de bienes y servicios necesarios sin excesos ni desperdicio
              </Typography>
            </Box>
          </Box>
        </Box>
    </ThemeProvider>
  )
}
