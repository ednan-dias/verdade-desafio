import { ReactNode } from "react";
import { StyledText } from "./styles";
import { useTheme } from "styled-components";
import { StyleProp, TextStyle } from "react-native";

interface TextProps {
  children: ReactNode;
  size?: number;
  mb?: number;
  weight?: "300" | "700";
  color?: string;
  style?: StyleProp<TextStyle>;
}

export function Text({ children, size, color, weight, mb, style }: TextProps) {
  const theme = useTheme();

  return (
    <StyledText
      size={size}
      weight={weight}
      color={color || theme.colors.text}
      mb={mb}
      style={style}
    >
      {children}
    </StyledText>
  );
}
