import styled from "styled-components/native";

interface HighlightProps {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  padding: 20px;

  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  gap: 10px;
`;

export const Game = styled.View`
  flex: 1;
  min-width: 100%;
  justify-content: center;
  align-items: center;
`;

export const RandomizedPlayer = styled.View`
  background: #fff;
  min-width: 200px;
  height: 50px;
  border-radius: 15px;

  flex-direction: row;
  align-items: center;
`;

export const Highlight = styled.View<HighlightProps>`
  width: 50px;
  height: 100%;

  background: ${({ color, theme }) => color || theme.colors.primary};

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  align-items: center;
  justify-content: center;
`;

export const InputView = styled.View`
  height: 100%;
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

export const RandomizedCard = styled.View`
  background: #fff;
  height: 50px;
  border-radius: 15px;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  min-width: 100%;
  align-items: center;
`;
