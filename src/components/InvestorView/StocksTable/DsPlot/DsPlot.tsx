import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Plot from "react-plotly.js";
import { useEffect, useState } from "react";
import { data } from "./data";

// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type DsPlotProps = {
  setBuyModal: (open: boolean) => void;
};

const DsPlot = (props: DsPlotProps) => {
  const { setBuyModal } = props;
  const [xaxis, setXaxis] = useState<string[]>([]);
  const [yaxis, setYaxis] = useState<string[]>([]);
  let x_arr: string[] = [];
  let y_arr: string[] = [];

  // tries to use a backend call but need premium so i used my own data
  useEffect(() => {
    const timeSeries = data["Time Series (Daily)"];
    for (const [key, { "1. open": value }] of Object.entries(timeSeries)) {
      x_arr.push(key);
      y_arr.push(value);
    }
    setXaxis(x_arr);
    setYaxis(y_arr);
  }, [data]);

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
