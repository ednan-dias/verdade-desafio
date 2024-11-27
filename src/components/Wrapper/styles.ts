import styled from "styled-components/native";

interface ContainerProps {
  pt?: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding-top: ${({ pt }) => `${pt}px`};
`;
