import { useState } from "react";
import "./index.css";

export function Accordion(props) {
  const { title="Accordion Title", defaultOpen, children } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const changeAccordionOpen = () => {setIsOpen(!isOpen)}

  return (
    <div className="accordion">
      <button className="accordion--button" onClick={changeAccordionOpen}>
        <h2>{title}</h2>
        <h3>{isOpen ? "-" : "+"}</h3>
      </button>
      {isOpen ? <p className="accordion-text">{children}</p> : <></>}
    </div>
  );
}
