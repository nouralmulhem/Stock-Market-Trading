import { Typography } from "@mui/material";
import { DsCard, DsChartCard } from "./styles";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// DS
import { HorDivider } from "../../DS/Divider/Divider";

// colors
import { contentColor } from "../../styles/colors";

type Dataset = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

type Data = {
  labels: string[];
  datasets: Dataset[];
};

type Props = {
  data: Data;
  title: string;
  discription: string;
  color: string;
  updated: string;
};

const ChartCard = (props: Props) => {
  const { data, title, discription, color, updated } = props;

  return (
    <DsCard elevation={4}>
      <DsChartCard bgcolor={color} elevation={4}>
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: title,
              },
            },
          }}
          data={data}
        />
      </DsChartCard>
      <Typography color={"white"} variant="h5" fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography color={contentColor}>{discription}</Typography>
      <HorDivider />
      <Typography
        fontWeight={"bold"}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        color={contentColor}
        variant="overline"
      >
        <AccessTimeIcon fontSize="small" sx={{ color: contentColor }} />
        {updated}
      </Typography>
    </DsCard>
  );
};

export default ChartCard;
