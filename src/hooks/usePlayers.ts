import { useContext } from "react";
import { PlayersContext } from "../contexts/PlayersContext";

export function usePlayers() {
  const context = useContext(PlayersContext);

  return context;
}
