import { Box } from "@mui/material";

// Ds
import StatisticsCard from "../../DS/StatisticsCard/StatisticsCard";
import ChartCard from "../../DS/ChartCard/ChartCard";

// data
import { AdminChartCardsArray, AdminStatCardsArray } from "./adminData";
import { InvestorStatCardsArray } from "./investorData";

// contexts
import { useIsAdmin } from "../../contexts/useIsAdmin";

export const Dashboard = () => {
  const { isAdmin } = useIsAdmin();

  return isAdmin ? (
    <Box display={"flex"} flexDirection={"column"} gap={10}>
      <Box display={"flex"} gap={5}>
        {AdminStatCardsArray.map((card) => {
          return (
            <StatisticsCard
              key={card.title}
              Icon={card.icon}
              title={card.title}
              value={card.value}
              color={card.color}
              percentage={card.percentage}
              percentageColor={card.percentageColor}
              time={card.time}
            />
          );
        })}
      </Box>
      <Box display={"flex"} gap={5}>
        {AdminChartCardsArray.map((card) => {
          return (
            <ChartCard
              key={card.title}
              xAxis={card.xAxis}
              series={card.series}
              title={card.title}
              discription={card.discription}
              color={card.color}
              updated={card.updated}
            />
          );
        })}
      </Box>
    </Box>
  ) : (
    <Box display={"flex"} gap={5}>
      {InvestorStatCardsArray.map((card) => {
        return (
          <StatisticsCard
            key={card.title}
            Icon={card.icon}
            title={card.title}
            value={card.value}
            color={card.color}
            percentage={card.percentage}
            percentageColor={card.percentageColor}
            time={card.time}
          />
        );
      })}
    </Box>
  );
};
