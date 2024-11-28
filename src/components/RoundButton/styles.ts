import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  color?: string;
  size?: number;
  enabled?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 50px;
  height: 50px;
  border-radius: 15px;

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
