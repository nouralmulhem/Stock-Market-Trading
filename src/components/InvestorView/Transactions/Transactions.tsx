import { Box, Typography, Button } from "@mui/material";
import { HorDivider } from "../../../DS/Divider/Divider";
import { TansictionsArray } from "./data";

type TansictionsProps = {
  username?: string;
};

const Transactions = (props: TansictionsProps) => {
  const { username } = props; // this is to call the backend for specific user -hopefilly when we have a backend ^^-

  return (
    <Box width={"100%"} marginTop={5} marginBottom={5}>
      <Typography
        color={"white"}
        fontWeight={"bold"}
        display={"flex"}
        alignItems={"center"}
        height={"36px"}
        marginBottom={3}
      >
        Previous Trnasactions :-
      </Typography>
      <Box display={"flex"} flexDirection={"column"}>
        {TansictionsArray.map((item, index) => (
          <>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              paddingRight={3}
            >
              <Box display={"flex"} gap={3} alignItems={"center"}>
                {item.icon}
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography fontWeight={"bold"} color={"white"}>
                    {item.type}
                  </Typography>
                  <Typography variant="overline" color={"white"}>
                    {item.disc} = {item.amount}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color={"info"}
                size="small"
                sx={{ height: "40px" }}
              >
                View Details
              </Button>
            </Box>
            {index != TansictionsArray.length - 1 && <HorDivider />}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Transactions;
