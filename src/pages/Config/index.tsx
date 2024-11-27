import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Choice, Container, Content, Header } from "./styles";
import { Icon } from "../../components/Icon";
import { useState } from "react";
import { Input } from "../../components/Input";
import { CenterContent } from "../../components/CenterContent";
import { Button } from "../../components/Button";

export function Config() {
  const [selectedType, setSelectedType] = useState("truth");
  const [data, setData] = useState("");

  return (
    <Wrapper>
      <Container>
        <Text size={20} weight="300">
          Adicionar Cartas
        </Text>

        <Content>
          <CenterContent>
            <Choice
              isSelected={selectedType === "truth"}
              onPress={() => setSelectedType("truth")}
              activeOpacity={0.4}
            >
              <Icon
                iconName="Eye"
                color={selectedType === "truth" ? "#fff" : "#000"}
              />
              <Text color={selectedType === "truth" ? "#fff" : "#000"}>
                Verdade
              </Text>
            </Choice>

            <Choice
              isSelected={selectedType === "challenge"}
              onPress={() => setSelectedType("challenge")}
              activeOpacity={0.4}
            >
              <Icon
                iconName="Sword"
                color={selectedType === "challenge" ? "#fff" : "#000"}
              />
              <Text color={selectedType === "challenge" ? "#fff" : "#000"}>
                Desafio
              </Text>
            </Choice>
          </CenterContent>

          <Input
            icon="Question"
            placeholder="Digite aqui..."
            value={data}
            onChangeText={setData}
          />
        </Content>

        <Button text="Adicionar" icon="PlusCircle" isDisabled={!data} />
      </Container>
    </Wrapper>
  );
}
