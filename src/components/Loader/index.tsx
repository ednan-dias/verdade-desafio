import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

interface LoaderProps {
  size?: number;
}

export function Loader({ size }: LoaderProps) {
  const theme = useTheme();

  return <ActivityIndicator color="#fff" size={size || 30} />;
}
