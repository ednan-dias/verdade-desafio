import { ReactNode } from "react";
import { Container } from "./styles";
import { StatusBar } from "react-native";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <Container pt={statusBarHeight}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {children}
    </Container>
  );
}
