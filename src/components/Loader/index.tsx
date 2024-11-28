import { ActivityIndicator } from "react-native";

interface LoaderProps {
  size?: number;
}

export function Loader({ size }: LoaderProps) {
  return <ActivityIndicator color="#fff" size={size || 30} />;
}
