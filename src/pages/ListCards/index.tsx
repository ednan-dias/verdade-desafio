import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Cards, CardView, CardViewContent, Container, Content } from "./styles";

import { useCallback, useEffect, useState } from "react";
import { Card, StateIndex } from "../../interfaces/card";
import CardService from "../../services/CardService";
import { customAPIMessageError } from "../../utils/errorUtils";
import { Loader } from "../../components/Loader";
import { Icon } from "../../components/Icon";
import EmptySpaceImage from "../../assets/empty-space.svg";

import { TouchButton } from "../../components/TouchButton";
import { Ask } from "../../components/Ask";
import { toast } from "../../utils/toast";
import { Button } from "../../components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function ListCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [isDeleteCardLoading, setIsDeleteCardLoading] = useState<StateIndex>(
    {}
  );

  const { navigate } = useNavigation();

  async function getCards() {
    try {
      setIsLoadingCards(true);

      const data = await CardService.getAll();

      setCards(data);
    } catch (err) {
      customAPIMessageError(err, "Não foi possível listar os cards!");
    } finally {
      setIsLoadingCards(false);
    }
  }

  async function handleDeleteCard(id: string, index: number) {
    try {
      setIsDeleteCardLoading((prevState) => ({
        ...prevState,
        [index]: true,
      }));

      await CardService.delete(id);

      toast("success", "Card excluído com sucesso!");
      getCards();
    } catch (err) {
      customAPIMessageError(err, "Não foi possível deletar os cards!");
    } finally {
      setIsDeleteCardLoading((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
  }

  useFocusEffect(
    useCallback(() => {
      getCards();
    }, [])
  );

  return (
    <Wrapper>
      <Container>
        <Text size={20} weight="300">
          Visualizar Cartas
        </Text>

        <Content>
          {isLoadingCards ? (
            <Loader />
          ) : cards.length === 0 ? (
            <>
              <EmptySpaceImage width={300} height={300} />

              <Text>Sem cartas :(</Text>

              <Button
                icon="PlusCircle"
                text="Adicionar Cartas"
                onPress={() => navigate("AddCard")}
              />
            </>
          ) : (
            <Cards
              contentContainerStyle={{
                gap: 10,
                alignItems: "center",
              }}
            >
              {cards.map((card, index) => (
                <CardView key={card.id}>
                  <CardViewContent>
                    <Icon
                      iconName={card.type === "TRUTH" ? "Eye" : "Sword"}
                      color="#fff"
                    />

                    <Text size={12}>{card.message}</Text>
                  </CardViewContent>

                  {isDeleteCardLoading[index] ? (
                    <Loader />
                  ) : (
                    <TouchButton
                      icon="Trash"
                      iconColor="#E71D36"
                      iconSize={30}
                      onPress={() =>
                        Ask("Deseja excluir o card selecionado?", () =>
                          handleDeleteCard(card.id, index)
                        )
                      }
                    />
                  )}
                </CardView>
              ))}
            </Cards>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
}
