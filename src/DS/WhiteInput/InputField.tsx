import { TextFieldVariants } from "@mui/material";
import { DsInputField } from "./styles";
import { ChangeEvent } from "react";

type InputFieldProps = {
  color: "info" | "primary" | "secondary";
  label: string;
  variant: TextFieldVariants | undefined;
  required?: boolean;
  type?: "email" | "password" | "number";
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const InputField = (props: InputFieldProps) => {
  const { required, color, label, variant, onChange, type, size, fullWidth } =
    props;
  return (
    <DsInputField
      required={required}
      color={color}
      label={label}
      variant={variant}
      onChange={onChange}
      type={type}
      size={size}
      fullWidth={fullWidth}
    />
  );
};

export default InputField;
