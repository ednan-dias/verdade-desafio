import { useState } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Container, Content } from "./styles";
import { RoundButton } from "../../components/RoundButton";
import { CenterContent } from "../../components/CenterContent";

export function PlayGame() {
  const [name, setName] = useState("");

  return (
    <Wrapper>
      <Container>
        <Content>
          <Text size={20} weight="300">
            Verdade ou Desafio?
          </Text>

          <CenterContent>
            <Input
              icon="UserCircle"
              value={name}
              onChangeText={setName}
              placeholder="Nome do jogador"
            />

            <RoundButton icon="PlusCircle" />
          </CenterContent>
        </Content>
      </Container>
    </Wrapper>
  );
}
