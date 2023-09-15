import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Plot from "react-plotly.js";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { data } from "./data";

type DsPlotProps = {
  setBuyModal: (open: boolean) => void;
};

const DsPlot = (props: DsPlotProps) => {
  const { setBuyModal } = props;
  const [xaxis, setXaxis] = useState<string[]>([]);
  const [yaxis, setYaxis] = useState<string[]>([]);
  let x_arr: string[] = [];
  let y_arr: string[] = [];

  // tries to use a backend call but need premium
  useEffect(() => {
    const timeSeries = data["Time Series (Daily)"];
    for (var key in timeSeries) {
      x_arr.push(key);
    }
    y_arr = Object.values(data["Time Series (Daily)"]).map(
      (entry) => entry["1. open"]
    );
  }, []);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={3}
      justifyContent={"center"}
      padding={3}
    >
      <Plot
        data={[
          {
            x: xaxis,
            y: yaxis,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 720, height: 440, title: "Company Share" }}
      />
      <Box>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={() => {
            setBuyModal(true);
          }}
        >
          Buy a share
        </Button>
      </Box>
    </Box>
  );
};

export default DsPlot;
