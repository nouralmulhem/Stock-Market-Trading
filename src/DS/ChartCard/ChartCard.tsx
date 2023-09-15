import { Typography } from "@mui/material";
import { DsCard, DsChartCard } from "./styles";
import { LineChart } from "@mui/x-charts/LineChart";

// icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// DS
import { HorDivider } from "../../DS/Divider/Divider";

type DataItem = {
  data: string[];
};

type DataWithMark = {
  data: number[];
  showMark?: boolean;
};

type Props = {
  xAxis: DataItem[];
  series: DataWithMark[];
  title: string;
  discription: string;
  color: string;
  updated: string;
};

const ChartCard = (props: Props) => {
  const { xAxis, series, title, discription, color, updated } = props;

  return (
    <DsCard elevation={4}>
      <DsChartCard bgcolor={color} elevation={4}>
        <LineChart xAxis={xAxis} series={series} width={500} height={300} />
      </DsChartCard>
      <Typography color={"white"} variant="h5" fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography color={"grey"}>{discription}</Typography>
      <HorDivider />
      <Typography
        fontWeight={"bold"}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        color={"grey"}
        variant="overline"
      >
        <AccessTimeIcon fontSize="small" sx={{ color: "grey" }} />
        {updated}
      </Typography>
    </DsCard>
  );
};

export default ChartCard;
