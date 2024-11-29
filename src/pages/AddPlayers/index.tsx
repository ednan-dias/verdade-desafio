import { useState } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import {
  Container,
  Content,
  Footer,
  Header,
  PlayerCard,
  PlayerInfo,
  Players,
} from "./styles";
import { RoundButton } from "../../components/RoundButton";
import { CenterContent } from "../../components/CenterContent";
import { Icon } from "../../components/Icon";
import { usePlayers } from "../../hooks/usePlayers";
import { Button } from "../../components/Button";

export function AddPlayers() {
  const [name, setName] = useState("");

  const { players, addPlayer, removePlayer } = usePlayers();

  function handleAddPlayer() {
    if (!name || name.trim().length === 0) {
      return;
    }

    addPlayer(name.trim());

    setName("");
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <Text size={20} weight="300">
              Verdade ou Desafio?
            </Text>

            <CenterContent>
              <Input
                icon="TextAa"
                value={name}
                onChangeText={setName}
                placeholder="Nome do jogador"
                onSubmitEditing={handleAddPlayer}
                submitBehavior="submit"
              />

              <RoundButton
                icon="PlusCircle"
                onPress={handleAddPlayer}
                isDisabled={!name || name.trim().length === 0}
              />
            </CenterContent>
          </Header>

          <Players>
            {players.map((player) => (
              <PlayerCard key={player.id}>
                <PlayerInfo>
                  <Icon iconName="UserCircle" />
                  <Text color="#000">{player.name}</Text>
                </PlayerInfo>

                <RoundButton
                  icon="Trash"
                  size={35}
                  borderRadius={10}
                  color="#e74c3c"
                  onPress={() => removePlayer(player.id)}
                />
              </PlayerCard>
            ))}
          </Players>

          <Footer>
            <Button
              icon="PlayCircle"
              text="Iniciar"
              isDisabled={players.length < 2}
            />
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  );
}
