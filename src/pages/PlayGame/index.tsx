import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import {
  Container,
  Content,
  Footer,
  Game,
  Highlight,
  InputView,
  RandomizedCard,
  RandomizedPlayer,
} from "./styles";

import CardsImage from "../../assets/cards.svg";
import { useCallback, useState } from "react";
import CardService from "../../services/CardService";
import { Card } from "../../interfaces/card";
import { customAPIMessageError } from "../../utils/errorUtils";
import { Player } from "../../interfaces/player";
import PlayerService from "../../services/PlayerService";
import { useFocusEffect } from "@react-navigation/native";
import { Icon } from "../../components/Icon";

export function PlayGame() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
  const [currentCard, setCurrentCard] = useState<Card>({} as Card);

  async function handleRandom() {
    let randomPlayersIndex = Math.floor(Math.random() * players.length);
    let randomCardsIndex = Math.floor(Math.random() * cards.length);

    if (players[randomPlayersIndex].id === currentPlayer.id) {
      if (randomPlayersIndex + 1 >= players.length) {
        randomPlayersIndex -= 1;
      } else {
        randomPlayersIndex += 1;
      }
    }

    if (cards[randomCardsIndex].id === currentCard.id) {
      if (randomCardsIndex + 1 >= cards.length) {
        randomCardsIndex -= 1;
      } else {
        randomCardsIndex += 1;
      }
    }

    setCurrentPlayer(players[randomPlayersIndex]);
    setCurrentCard(cards[randomCardsIndex]);
  }

  async function getPlayers() {
    try {
      const data = await PlayerService.getAll();

      setPlayers(data);
    } catch (err) {
      customAPIMessageError(err, "Não foi possível buscar os jogadores!");
    }
  }

  async function getCards() {
    try {
      const data = await CardService.getAll();

      setCards(data);
    } catch (err) {
      customAPIMessageError(err, "Não foi possível listar os cards!");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getCards();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      getPlayers();
    }, [])
  );

  return (
    <Wrapper>
      <Container>
        <Content>
          <Game>
            {currentCard.id && currentPlayer.id ? (
              <>
                <RandomizedPlayer>
                  <Highlight>
                    <Icon size={30} color="#fff" iconName="UserCircle" />
                  </Highlight>

                  <InputView>
                    <Text color="#000">{currentPlayer.name}</Text>
                  </InputView>
                </RandomizedPlayer>

                <RandomizedCard>
                  <Highlight
                    color={currentCard.type === "CHALLENGE" ? "#e74c3c" : ""}
                  >
                    <Icon
                      size={30}
                      color="#fff"
                      iconName={currentCard.type === "TRUTH" ? "Eye" : "Sword"}
                    />
                  </Highlight>

                  <InputView>
                    <Text color="#000" size={12}>
                      {currentCard.message}
                    </Text>
                  </InputView>
                </RandomizedCard>
              </>
            ) : (
              <>
                <CardsImage width={200} height={200} />
                <Text size={18} weight="300">
                  Clique em Sortear
                </Text>
              </>
            )}
          </Game>

          <Footer>
            <Button icon="DiceFive" text="Sortear" onPress={handleRandom} />
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  );
}
