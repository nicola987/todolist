import React from "react";
import {
  Container,
  Header,
  HeaderBox,
  HeaderText,
  StyledH1,
  TitleText,
  HeaderImg,
  ButtonShop,
  StyledH2,
} from "./Page.styled";
import image from "./istockphoto-1434101471-612x612.jpg";

function Page() {
  return (
    <Container>
      <Header>
        <HeaderBox>
          <TitleText>
            <StyledH1>
              Decorating with plants is a wonderful way to bring life and
              vitality to interiors.
            </StyledH1>
            <HeaderText>
              Decorating with plants is a wonderful way to bring life and
              vitality to interiors. There's nothing like lush greenery to
              brighten up a living space, plus the positive impact plants have
              on our health and wellbeing is well documented.
            </HeaderText>
            <ButtonShop>
              <a
                href="https://hollanthosflowers.com/?gclid=CjwKCAiAs8acBhA1EiwAgRFdw6W5qob-IeUDdYesWY63jePaogUSGJ-n7WZMzSnQsbfy9rsw9od4eBoC2FEQAvD_BwE"
                target="_blank"
              >
                SHOP BUTTON
              </a>
            </ButtonShop>
          </TitleText>
          <HeaderImg src={image} alt="design room" />
        </HeaderBox>
        <StyledH2>
          What are the advantages of having plants in the interior?
        </StyledH2>
      </Header>
    </Container>
  );
}

export default Page;
