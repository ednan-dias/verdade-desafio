import * as PhosphorIcon from "phosphor-react-native";
import { ComponentType } from "react";
import { GestureResponderEvent } from "react-native";

export interface IconProps extends PhosphorIcon.IconProps {
  iconName: keyof typeof PhosphorIcon;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export function Icon({ iconName, onPress, ...rest }: IconProps) {
  const BaseIcon = PhosphorIcon[
    iconName
  ] as ComponentType<PhosphorIcon.IconProps>;

  return <BaseIcon {...rest} />;
}
