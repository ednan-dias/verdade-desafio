import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Container, Content, Header } from "./styles";
import WelcomeImage from "../../assets/welcome.svg";
import { Icon } from "../../components/Icon";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <Container>
        <Header>
          <Icon
            size={35}
            iconName="PlusCircle"
            weight="fill"
            color={theme.colors.primary}
            isButton
            onPress={() => navigate("AddCards")}
          />
        </Header>

        <Content>
          <WelcomeImage width={250} height={250} />

          <Text size={20} weight="300">
            Verdade ou Desafio?
          </Text>

          <Button icon="Joystick" text="Jogar" />
        </Content>
      </Container>
    </Wrapper>
  );
}
