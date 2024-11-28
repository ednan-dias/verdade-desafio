import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Container, Content, Header } from "./styles";
import WelcomeImage from "../../assets/welcome.svg";
import { Icon } from "../../components/Icon";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchButton } from "../../components/TouchButton";

export function Home() {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <Container>
        <Header>
          <TouchButton
            icon="Gear"
            iconSize={35}
            iconWeight="fill"
            iconColor={theme.colors.primary}
            onPress={() => navigate("Config")}
          />
        </Header>

        <Content>
          <WelcomeImage width={250} height={250} />

          <Text size={20} weight="300">
            Verdade ou Desafio?
          </Text>

          <Button
            icon="Joystick"
            text="Jogar"
            onPress={() => navigate("PlayGame")}
          />
        </Content>
      </Container>
    </Wrapper>
  );
}
