import { useCallback, useState } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import {
  Center,
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
import { Button } from "../../components/Button";
import SelectPlayerImage from "../../assets/select-player.svg";
import { ScrollView } from "react-native";
import { toast } from "../../utils/toast";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { customAPIMessageError } from "../../utils/errorUtils";
import { StateIndex } from "../../interfaces/global";
import { Ask } from "../../components/Ask";
import PlayerService from "../../services/PlayerService";
import { Player } from "../../interfaces/player";
import { Loader } from "../../components/Loader";

export function AddPlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState("");

  const [isLoadingPlayers, setIsLoadingPlayers] = useState(true);
  const [isAddPlayerLoading, setIsAddPlayerLoading] = useState(false);
  const [isDeletePlayerLoading, setIsDeletePlayerLoading] =
    useState<StateIndex>({});

  const { navigate } = useNavigation();

  async function getPlayers() {
    try {
      setIsLoadingPlayers(true);
      const data = await PlayerService.getAll();

      setPlayers(data);
    } catch (err) {
      customAPIMessageError(err, "Não foi possível buscar os jogadores!");
    } finally {
      setIsLoadingPlayers(false);
    }
  }

  async function handleAddPlayer() {
    if (!name || name.trim().length === 0) {
      return;
    }

    if (players.length >= 10) {
      return toast("info", "Limite de jogadores atingidos!");
    }

    try {
      setIsAddPlayerLoading(true);

      await PlayerService.create({ name });

      getPlayers();
    } catch (err) {
      customAPIMessageError(err, "Não foi possível adicionar o jogador!");
    } finally {
      setName("");
      setIsAddPlayerLoading(false);
    }
  }

  async function handleDeletePlayer(id: string, index: number) {
    try {
      setIsDeletePlayerLoading((prevState) => ({
        ...prevState,
        [index]: true,
      }));

      await PlayerService.delete(id);

      getPlayers();
    } catch (err) {
      customAPIMessageError(err, "Não foi possível deletar o jogador!");
    } finally {
      setIsDeletePlayerLoading((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
  }

  useFocusEffect(
    useCallback(() => {
      getPlayers();
    }, [])
  );

  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <Text size={20} weight="300">
              Adicionar Jogadores
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
                isLoading={isAddPlayerLoading}
              />
            </CenterContent>
          </Header>

          {isLoadingPlayers ? (
            <Center>
              <Loader size={50} />
            </Center>
          ) : players.length === 0 ? (
            <Center>
              <SelectPlayerImage width={180} height={180} />
            </Center>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Players>
                {players.map((player, index) => (
                  <PlayerCard key={player.id}>
                    <PlayerInfo>
                      <Icon iconName="UserCircle" />
                      <Text color="#000">
                        #{player.id.substring(0, 3)} - {player.name}
                      </Text>
                    </PlayerInfo>

                    <RoundButton
                      icon="Trash"
                      size={35}
                      borderRadius={10}
                      color="#e74c3c"
                      onPress={() =>
                        Ask(`Deseja excluir ${player.name}?`, () =>
                          handleDeletePlayer(player.id, index)
                        )
                      }
                      isLoading={isDeletePlayerLoading[index]}
                    />
                  </PlayerCard>
                ))}
              </Players>
            </ScrollView>
          )}

          <Footer>
            <Button
              icon="ArrowCounterClockwise"
              text="Recarregar"
              onPress={getPlayers}
              isLoading={isLoadingPlayers}
            />

            <Button
              icon="PlayCircle"
              text="Iniciar"
              isDisabled={players.length < 2}
              onPress={() => navigate("PlayGame")}
            />
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  );
}
