import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  color?: string;
  size?: number;
  enabled?: boolean;
  borderRadius?: number;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: ${({ size }) => `${size || 50}px`};
  height: ${({ size }) => `${size || 50}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius || 15}px`};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${({ color, theme }) => color || theme.colors.primary};

  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0.6;
    `}
`;
