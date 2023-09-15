import { Box, Typography } from "@mui/material";
import { DsCard, DsIconCard } from "./styles";

// icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import CountUp from "react-countup";

// DS
import { HorDivider } from "../../DS/Divider/Divider";

// colors
import { contentColor } from "../../styles/colors";

type Props = {
  Icon: typeof PeopleAltIcon;
  title: string;
  value: number;
  color: string;
  percentage: string;
  percentageColor: string;
  time: string;
};

const StatisticsCard = (props: Props) => {
  const { Icon, title, value, color, percentageColor, percentage, time } =
    props;
  return (
    <DsCard elevation={4}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <DsIconCard bgcolor={color} elevation={4}>
          <Icon fontSize="large" sx={{ color: "white" }} />
        </DsIconCard>
        <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
          <Typography color={"white"} variant="h6">
            {title}
          </Typography>
          <Typography color={"white"} fontWeight={"bold"} variant={"h4"}>
            <CountUp start={0} end={value} duration={2} separator=" " />
          </Typography>
        </Box>
      </Box>
      <HorDivider />
      <Box display={"flex"} gap={1}>
        <Typography color={percentageColor} fontWeight={"bold"}>
          {percentage}%{" "}
        </Typography>
        <Typography color={contentColor} fontWeight={"bold"}>
          {time}
        </Typography>
      </Box>
    </DsCard>
  );
};

export default StatisticsCard;
