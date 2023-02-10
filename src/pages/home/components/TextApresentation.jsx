import { useEffect, useRef, useState } from "react";
import shortid from "shortid";
import ButtonPrimary from "../../../components/buttonPrimary/ButtonPrimary";
import "../style/textApresentation.css";

function TextApresentation({
  captureInputDom,
  handleInput,
  numberOption,
  isChecked,
  clickLabel,
}) {
  const refeInput = useRef(null);
  const id = shortid.generate();
  const refeContainerTextApresentation = useRef(null);

  function reziseCalculator() {
    const heightContainerApresentation =
      refeContainerTextApresentation.current.clientHeight;

    document.body.style.setProperty(
      "--heightContainerApresentation",
      `${heightContainerApresentation}px`
    );
  }

  useEffect(() => {
    window.addEventListener("resize", reziseCalculator);
    reziseCalculator();
  }, [refeContainerTextApresentation]);

  useEffect(() => {
    captureInputDom(refeInput.current);
  }, [refeInput]);

  return (
    <>
      <p onClick={(e) => clickLabel(e)} className="optionHomeSelect">
        {numberOption}
      </p>
      <input
        defaultChecked={isChecked}
        className="inputTitleHome"
        type="radio"
        name="inputTitleHome"
        id={id}
        ref={refeInput}
        onChange={() => handleInput()}
      />
      <div
        className="containerTextApresentation"
        ref={refeContainerTextApresentation}
      >
        <p className="textSimple">FOR WEBSITE AND VIDEO EDITING</p>
        <div>
          <p className="titleMain">VIDEOGRAPHER’S</p>
          <p className="titleMain">PORTFOLIO</p>
        </div>
        <div>
          <ButtonPrimary textButton="See more about us" />
        </div>
      </div>
    </>
  );
}

export default TextApresentation;
