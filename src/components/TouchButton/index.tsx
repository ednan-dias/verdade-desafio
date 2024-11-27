import * as PhosphorIcon from "phosphor-react-native";

import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { Icon } from "../Icon";
import { useTheme } from "styled-components";
import { Loader } from "../Loader";

interface TouchButtonProps extends TouchableOpacityProps {
  icon: keyof typeof PhosphorIcon;
  iconColor?: string;
  iconSize?: number;
  iconWeight?: PhosphorIcon.IconWeight;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export function TouchButton({
  icon,
  isLoading,
  isDisabled,
  iconColor,
  iconSize,
  iconWeight,
  ...rest
}: TouchButtonProps) {
  const theme = useTheme();

  return (
    <Container disabled={isLoading || isDisabled} {...rest}>
      {isLoading ? (
        <Loader size={25} />
      ) : (
        <Icon
          iconName={icon}
          color={iconColor || theme.colors.icons}
          size={iconSize}
          weight={iconWeight || "fill"}
        />
      )}
    </Container>
  );
}
