import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

type DsPaperProps = {
  paddingTop?: number;
};

type DsChildPaperProps = {
  top?: number;
  position?: "absolute" | "relative";
};

export const DsPaper = styled(Paper)<DsPaperProps>(({ theme, paddingTop }) => ({
  minHeight: "60%",
  margin: "auto",
  padding: 30,
  paddingTop,
  position: "relative",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#1d2843",
}));

export const DsChildPaper = styled(Paper)<DsChildPaperProps>(
  ({ theme, top, position }) => ({
    width: "75%",
    margin: "auto",
    marginBottom: 30,
    padding: 30,
    top,
    position,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "inherit",
    alignItems: "center",
    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(18 79 159))",
  })
);
