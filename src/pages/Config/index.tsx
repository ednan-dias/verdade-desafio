import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Container, Content } from "./styles";

export function Config() {
  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <Container>
        <Text size={20} weight="300">
          Configurações
        </Text>

        <Content>
          <Button
            icon="Eye"
            text="Visualizar Cartas"
            onPress={() => navigate("ListCards")}
          />

          <Button
            icon="PlusCircle"
            text="Adic. Cartas"
            onPress={() => navigate("AddCard")}
          />
        </Content>
      </Container>
    </Wrapper>
  );
}
