import Toast from "react-native-toast-message";

export function toast(
  type: "error" | "info" | "success",
  title: string,
  message?: string
) {
  return Toast.show({
    type,
    text1: title,
    text2: message,
  });
}
