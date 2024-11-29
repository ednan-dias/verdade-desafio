import { createContext, ReactNode, useState } from "react";
import * as Crypto from "expo-crypto";

interface Player {
  id: string;
  name: string;
}

interface PlayersContextData {
  players: Player[];
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersContext = createContext({} as PlayersContextData);

export function PlayersProvider({ children }: PlayersProviderProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer(name: string) {
    setPlayers((prevState) => [
      ...prevState,
      {
        id: Crypto.randomUUID(),
        name,
      },
    ]);
  }

  function removePlayer(id: string) {
    setPlayers((prevState) => prevState.filter((player) => player.id !== id));
  }

  return (
    <PlayersContext.Provider
      value={{
        players,
        addPlayer,
        removePlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}
