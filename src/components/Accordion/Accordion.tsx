import React, { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionHeaderText,
  AccordionWrapper,
} from "./Accordion.styled";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

type AccordionProps = {
  title: string;
  body: string;
};

export default function Accordion({ title, body }: AccordionProps) {
  const [isShowBody, setIsShowBody] = useState(false);
  const handleShowBody = () => {
    setIsShowBody(!isShowBody);
  };
  return (
    <AccordionWrapper>
      <AccordionHeader isBorder={isShowBody} onClick={handleShowBody}>
        <AccordionHeaderText>{title}</AccordionHeaderText>
        {isShowBody ? (
          <GoChevronDown fontSize={36} />
        ) : (
          <GoChevronUp fontSize={36} />
        )}
      </AccordionHeader>
      {isShowBody && <AccordionBody>{body}</AccordionBody>}
    </AccordionWrapper>
  );
}
