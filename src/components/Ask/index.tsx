import { Alert as AlertNative } from "react-native";

export function Ask(message: string, onPress?: () => void) {
  return AlertNative.alert(
    "Confirmação",
    message,
    onPress && [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress,
      },
    ],
    { cancelable: false }
  );
}
