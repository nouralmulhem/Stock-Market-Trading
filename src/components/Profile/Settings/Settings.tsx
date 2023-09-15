import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

const contentColor: string = "#cacaca";

const Settings = () => {
  return (
    <Box width={"50%"}>
      <Box padding={2}>
        <Typography
          color={"white"}
          fontWeight={"bold"}
          display={"flex"}
          alignItems={"center"}
          height={"36px"}
          marginBottom={2}
        >
          Platform Settings
        </Typography>
        <Typography color={contentColor} variant={"caption"}>
          ACCOUNT
        </Typography>
        <Box>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                sx={{ color: contentColor }}
                control={<Switch name="folllow" color="info" />}
                label="Email me when someone follows me"
              />
              <FormControlLabel
                sx={{ color: contentColor }}
                control={<Switch name="post" color="info" />}
                label="Email me when someone answers on post"
              />
              <FormControlLabel
                sx={{ color: contentColor }}
                control={<Switch name="mention" color="info" />}
                label="Email me when someone mentions me"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
