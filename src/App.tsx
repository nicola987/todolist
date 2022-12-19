import React from "react";
import { AccordionsWrapper } from "./App.styled";
import Accordion from "./components/Accordion/Accordion";
import Page from "./components/Page/Page";

function App() {
  const tabOfAccordions = [
    {
      title: "Czy Nikola rozumie wszystko?",
      body: "Mówi ze tak",
    },
    {
      title: "Super tytuł",
      body: "Super partia *****",
    },
    {
      title: "Jestem ostatni",
      body: "Nie",
    },
    {
      title: "Czy Nikola rozumie wszystko?",
      body: "Mówi ze tak",
    },
  ];
  return (
    <>
      <Page />
      <AccordionsWrapper>
        {tabOfAccordions.map((el) => (
          <Accordion title={el.title} body={el.body} />
        ))}
      </AccordionsWrapper>
    </>
  );
}

export default App;
