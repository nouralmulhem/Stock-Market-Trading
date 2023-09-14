import { TextFieldVariants } from "@mui/material";
import { DsInputField } from "./styles";
import { ChangeEvent } from "react";

type InputFieldProps = {
  required: boolean;
  color: "info" | "primary" | "secondary";
  label: string;
  variant: TextFieldVariants | undefined;
  type?: "email" | "password";
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  size?: "small" | "medium";
};

const InputField = (props: InputFieldProps) => {
  const { required, color, label, variant, onChange, type, size } = props;
  return (
    <DsInputField
      required={required}
      color={color}
      label={label}
      variant={variant}
      onChange={onChange}
      type={type}
      size={size}
    />
  );
};

export default InputField;
