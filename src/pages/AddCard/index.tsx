import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Choice, Container, Content } from "./styles";
import { Icon } from "../../components/Icon";
import { useState } from "react";
import { Input } from "../../components/Input";
import { CenterContent } from "../../components/CenterContent";
import { Button } from "../../components/Button";
import { Type } from "../../interfaces/card";
import { customAPIMessageError } from "../../utils/errorUtils";
import CardService from "../../services/CardService";
import { toast } from "../../utils/toast";
import ChallengeImage from "../../assets/challenge.svg";
import { KeyboardAvoid } from "../../components/KeyboardAvoid";

export function AddCard() {
  const [type, setType] = useState<Type>("TRUTH");
  const [message, setMessage] = useState("");
  const [isLoadingCreateCard, setIsLoadingCreateCard] = useState(false);

  async function handleCreateCard() {
    try {
      setIsLoadingCreateCard(true);

      await CardService.create({ type, message });

      setMessage("");

      toast("success", "Card criado com sucesso!");
    } catch (err) {
      customAPIMessageError(err, "Não foi possível adicionar o card!");
    } finally {
      setIsLoadingCreateCard(false);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Text size={20} weight="300">
          Adicionar Cartas
        </Text>

        <Content>
          <KeyboardAvoid
            style={{
              alignItems: "center",
              gap: 10,
            }}
            offset={200}
          >
            <ChallengeImage width={200} height={200} />

            <CenterContent>
              <Choice
                isSelected={type === "TRUTH"}
                onPress={() => setType("TRUTH")}
                activeOpacity={0.4}
              >
                <Icon
                  iconName="Eye"
                  color={type === "TRUTH" ? "#fff" : "#000"}
                />
                <Text color={type === "TRUTH" ? "#fff" : "#000"}>Verdade</Text>
              </Choice>

              <Choice
                isSelected={type === "CHALLENGE"}
                onPress={() => setType("CHALLENGE")}
                activeOpacity={0.4}
              >
                <Icon
                  iconName="Sword"
                  color={type === "CHALLENGE" ? "#fff" : "#000"}
                />
                <Text color={type === "CHALLENGE" ? "#fff" : "#000"}>
                  Desafio
                </Text>
              </Choice>
            </CenterContent>

            <Input
              icon="Question"
              placeholder="Digite aqui..."
              value={message}
              onChangeText={setMessage}
            />
          </KeyboardAvoid>
        </Content>

        <Button
          text="Adicionar"
          icon="PlusCircle"
          isDisabled={!message}
          onPress={handleCreateCard}
          isLoading={isLoadingCreateCard}
          loadingText="Adicionando..."
        />
      </Container>
    </Wrapper>
  );
}
