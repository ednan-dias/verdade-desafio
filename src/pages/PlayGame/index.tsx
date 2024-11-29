import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { Container, Content, Footer, Game } from "./styles";

import CardsImage from "../../assets/cards.svg";

export function PlayGame() {
  async function handleRandom() {}

  return (
    <Wrapper>
      <Container>
        <Content>
          <Game>
            <CardsImage width={200} height={200} />

            <Text size={18} weight="300">
              Clique em Sortear
            </Text>
          </Game>

          <Footer>
            <Button icon="DiceFive" text="Sortear" onPress={handleRandom} />
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  );
}
