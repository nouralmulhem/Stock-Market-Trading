import React from "react";
import { AuthContainer } from "./styles";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;
  return <AuthContainer>{children}</AuthContainer>;
};

export default Container;
