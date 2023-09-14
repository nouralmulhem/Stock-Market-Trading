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
  const [yaxis, setYaxis] = useState<number[]>([]);
  let x_arr: string[] = [];
  let y_arr: number[] = [];

  // tries to use a backend call but need premium
  useEffect(() => {
    for (var key in data["Time Series (Daily)"]) {
      x_arr.push(key);
      y_arr.push(Math.random() * (290 - 100) + 290);
    }
    setXaxis(x_arr);
    setYaxis(y_arr);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
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
