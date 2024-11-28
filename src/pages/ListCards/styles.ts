import styled from "styled-components/native";
import { Card } from "../../interfaces/card";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  align-items: center;
`;

export const Cards = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
`;

export const CardView = styled.View`
  width: 100%;
  height: 75px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 15px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardViewContent = styled.View`
  flex: 1;
  align-items: center;
`;
