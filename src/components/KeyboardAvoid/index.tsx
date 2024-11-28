import { ReactNode } from "react";
import { KeyboardAvoidingView, StyleProp, ViewStyle } from "react-native";

interface KeyboardAvoidProps {
  children: ReactNode;
  offset?: number;
  behavior?: "position" | "height";
  style?: StyleProp<ViewStyle>;
}

export function KeyboardAvoid({
  children,
  offset,
  behavior,
  style,
}: KeyboardAvoidProps) {
  return (
    <KeyboardAvoidingView
      behavior={behavior || "padding"}
      keyboardVerticalOffset={offset || 80}
      style={style}
    >
      {children}
    </KeyboardAvoidingView>
  );
}
