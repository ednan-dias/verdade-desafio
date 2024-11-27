import * as PhosphorIcon from "phosphor-react-native";

import { TextInput, TextInputProps, StyleSheet } from "react-native";

import { Container } from "./styles";
import { TouchButton } from "../TouchButton";
import { forwardRef, useState } from "react";
import { useTheme } from "styled-components";
import { Icon } from "../Icon";

interface InputProps extends TextInputProps {
  icon?: keyof typeof PhosphorIcon;
  isPassword?: boolean;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ icon, isPassword, ...rest }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const theme = useTheme();

    return (
      <Container isFocused={isFocused}>
        {icon && (
          <Icon
            iconName={icon}
            color={isFocused ? theme.colors.buttonColor : "#000"}
          />
        )}

        <TextInput
          ref={ref}
          cursorColor={theme.colors.buttonColor}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={
            isFocused ? theme.colors.buttonColor : "#5d6d7e"
          }
          style={styles.input}
          {...rest}
        />

        {isPassword && (
          <TouchButton
            icon={isPasswordVisible ? "Eye" : "EyeClosed"}
            iconColor="#000"
            iconWeight="regular"
            onPress={() => setIsPasswordVisible((prevState) => !prevState)}
          />
        )}
      </Container>
    );
  }
);

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 5,
    fontSize: 16,
  },
});
