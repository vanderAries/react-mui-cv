import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Divider sx={{ margin: 1 }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Typography variant="body2" color="textSecondary">
            hjhj
        </Typography>
      </Box>
    </>
  );
}
