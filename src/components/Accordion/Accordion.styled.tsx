import styled from "styled-components";

export const AccordionWrapper = styled.div`
  background-color: rgb(223, 195, 162);
  border-radius: 16px;
  width: fit-content;
`;

type AccordionHeaderProps = {
  isBorder: boolean;
};

export const AccordionHeader = styled.h1<AccordionHeaderProps>`
  border-bottom: ${({ isBorder }) => (isBorder ? "1px solid gray" : "unset")};
  padding: 16px 64px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AccordionHeaderText = styled.div`
  margin-right: 12px;
`;

export const AccordionBody = styled.p`
  padding: 32px 0;
  margin: 0 auto;
  color: white;
  max-width: 380px;
  text-align: justify;
`;
