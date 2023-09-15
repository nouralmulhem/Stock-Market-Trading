import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box width={"100%"} paddingBottom={"1rem"} bottom={0} position={"absolute"}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5" fontWeight={"bold"}>
              Stock Market Trading App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#1052c1" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | Axios | TypeScript`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
