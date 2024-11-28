import styled, { css } from "styled-components/native";
import { KeyboardAvoid } from "../../components/KeyboardAvoid";

interface ChoiceProps {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  align-items: center;
`;

export const Header = styled.View`
  align-items: flex-end;
  width: 100%;
`;

export const Choice = styled.TouchableOpacity<ChoiceProps>`
  background: #fff;
  width: 100px;
  height: 100px;
  border-radius: 25px;

  align-items: center;
  justify-content: center;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.primary};
    `}
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  justify-content: center;
  align-items: center;
  gap: 10px;
`;
