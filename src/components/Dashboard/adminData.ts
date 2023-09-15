// icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EuroIcon from "@mui/icons-material/Euro";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import ShowChartIcon from "@mui/icons-material/ShowChart";

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

export const AdminChartCardsArray = [
  {
    key: "1",
    xAxis: [
      {
        scaleType: "point",
        data: [
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
        ],
      },
    ],
    series: [
      {
        data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
        label: "this year",
        showMark: true,
      },
    ],
    title: "Transactions",
    discription: "Last Campaign Performance",
    color: "linear-gradient(195deg, rgb(165 213 255), rgb(26 126 255))",
    updated: "Updated 2 hours ago",
  },
  {
    key: "2",
    xAxis: [
      {
        scaleType: "point",
        data: [
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
        ],
      },
    ],
    series: [
      {
        data: [9.7, 4.1, 5.9, 3.5, 2.5, 0.8, 5.3, 8, 9.1, 8],
        label: "this year",
        showMark: true,
      },
      {
        data: [2, 3, 9.5, 8.5, 0.5, 5, 1, 4, 3, 8],
        label: "last year",
        showMark: true,
      },
    ],
    title: "Money",
    discription: "(+15%) increase in today sales.",
    color: "linear-gradient(195deg, rgb(255 233 241), rgb(255 84 146))",
    updated: "Updated 18 mins ago",
  },
];
