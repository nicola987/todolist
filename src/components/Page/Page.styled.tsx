import styled from "styled-components";

export const Container = styled.div`
  width: 1048px;
  margin: 0 auto;
`;

export const Header = styled.header``;

export const HeaderBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  margin-top: 60px;
`;

export const StyledH1 = styled.h1`
  font-family: Verdana, sans-serif;
  color: black;
  font-size: 34px;
  margin-top: 0;
`;

export const TitleText = styled.div``;

export const HeaderText = styled.p`
  font-family: "Inter", sans-serif;
  color: #343a40;
  font-size: 22px;
  letter-spacing: 1px;
`;

export const HeaderImg = styled.img`
  width: 600px;
  height: 450px;
  border-radius: 30px;
`;

export const ButtonShop = styled.div`
  color: rgb(44, 41, 41);
  background-color: rgb(223, 195, 162);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 18px;
  border-style: none;
  padding: 10px;
  text-align: center;
  width: fit-content;
`;

export const StyledH2 = styled.h2`
  font-family: "Inter", sans-serif;
  color: black;
  margin: 40px;
  margin-left: 0;
  font-size: 28px;
`;
