import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TagIcon from "@mui/icons-material/Tag";
export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        width: "100%",
        height: 60,
        alignItems: "center",
        backgroundColor: "black",
        justifyContent:'space-around'
      }}
    >
      <Box sx={{display:'flex'}} >
        <TagIcon fontSize="large" sx={{ color: "white" }} />
        <Typography
          variant="h5"
          sx={{
            color: "white",
            marginTop:0.3
          }}
        >
          Las Redes Sociales
        </Typography>
      </Box>
      <Typography variant="h5" sx={{color:'white'}}>
          Data
      </Typography>
    </Box>
  );
};
