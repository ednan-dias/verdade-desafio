import * as PhosphorIcon from "phosphor-react-native";
import { ComponentType } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

export interface IconProps extends PhosphorIcon.IconProps {
  iconName: keyof typeof PhosphorIcon;
  isButton?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export function Icon({ iconName, isButton, onPress, ...rest }: IconProps) {
  const BaseIcon = PhosphorIcon[
    iconName
  ] as ComponentType<PhosphorIcon.IconProps>;

  if (isButton) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <BaseIcon {...rest} />
      </TouchableOpacity>
    );
  }

  return <BaseIcon {...rest} />;
}
