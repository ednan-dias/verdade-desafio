import { ActivityIndicator } from "react-native";

import * as PhosphorIcon from "phosphor-react-native";

import { Icon } from "../Icon";

import { Container } from "./styles";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { forwardRef } from "react";

export interface ButtonProps extends RectButtonProps {
  icon: keyof typeof PhosphorIcon;
  color?: string;
  size?: number;
  borderRadius?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const RoundButton = forwardRef<typeof RectButton, ButtonProps>(
  ({ icon, color, size, isLoading, isDisabled, ...rest }, ref) => {
    const disabled = isLoading || isDisabled;

    return (
      <Container
        ref={ref}
        color={color}
        size={size}
        enabled={!disabled}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator size={25} color="#fff" />
        ) : (
          <Icon iconName={icon} color="#fff" weight="fill" />
        )}
      </Container>
    );
  }
);
