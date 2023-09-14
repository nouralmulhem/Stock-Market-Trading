import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DsInputField = styled(TextField)(({ theme }) => ({
  fieldset: {
    borderColor: "#ffffff3b",
  },
  label: {
    color: "#ffffff3b",
  },
  input: {
    color: "#fff",
  },
}));
