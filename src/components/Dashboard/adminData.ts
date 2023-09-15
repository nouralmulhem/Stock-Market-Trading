// icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EuroIcon from "@mui/icons-material/Euro";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import faker from "faker";

export const AdminStatCardsArray = [
  {
    key: "1",
    icon: PeopleAltIcon,
    title: "Investors",
    value: 281,
    color: "linear-gradient(195deg, rgb(50, 58, 84), rgb(26, 32, 53))",
    percentage: "+55",
    percentageColor: "green",
    time: "Since last month",
  },
  {
    key: "2",
    icon: AirlineStopsIcon,
    title: "Transactions",
    value: 2300,
    color: "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    percentage: "+3",
    percentageColor: "green",
    time: "Since last week",
  },
  {
    key: "3",
    icon: EuroIcon,
    title: "Money",
    value: 34000,
    color: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    percentage: "-8",
    percentageColor: "red",
    time: "Since last day",
  },
  {
    key: "4",
    icon: ShowChartIcon,
    title: "Stocks",
    value: 90,
    color: "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
    percentage: "+17",
    percentageColor: "green",
    time: "Since last year",
  },
];

const labels = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
];

export const AdminChartCardsArray = [
  {
    key: "1",
    data: {
      labels,
      datasets: [
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          label: "this year",
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
      ],
    },
    title: "Transactions",
    discription: "Last Campaign Performance",
    color: "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    updated: "Updated 2 hours ago",
  },
  {
    key: "2",
    data: {
      labels,
      datasets: [
        {
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          label: "this year",
          borderColor: "#ec407a",
          backgroundColor: "#ec407a",
        },
        {
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          label: "last year",
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
      ],
    },
    title: "Money",
    discription: "(+15%) increase in today sales.",
    color: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    updated: "Updated 18 mins ago",
  },
];
