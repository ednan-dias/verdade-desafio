import styled, { css } from "styled-components/native";

interface StyledTextProps {
  size?: number;
  weight?: "300" | "700";
  color?: string;
  mb?: number;
}

export const StyledText = styled.Text<StyledTextProps>`
  font-family: ${({ weight }) =>
    weight === "300"
      ? "Poppins_300Light"
      : weight === "700"
      ? "Poppins_700Bold"
      : "Poppins_400Regular"};
  font-size: ${({ size }) => `${size || 16}px`};
  margin-bottom: ${({ mb }) => `${mb || 0}px`};
  color: ${({ color }) => color};
  text-align: center;
`;
