import { useState } from "react";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import TextApresentation from "./components/TextApresentation";
import "./style/home.css";

function Home() {
  const arrayPush = [];
  const [arrayGeneral, setArrayGeneral] = useState([]);
  let intervalAnimationHome;
  let contador = 1;

  function captureItemDom(e) {
    arrayPush.push(e);
    setArrayGeneral(arrayPush);
  }

  const animationInfinit = () => {
    mapGeneral();
    intervalAnimationHome = setInterval(() => {
      if (contador >= 3) {
        contador = 0;
      }
      if (arrayGeneral[contador] !== undefined) {
        arrayGeneral[contador].checked = true;
        mapGeneral();
      }
      contador += 1;
    }, 5000);
  };
  animationInfinit();

  function mapGeneral() {
    arrayGeneral.map((input) => {
      if (input.checked === true) {
        input.classList.add("animation");
        input.previousSibling.classList.add("optionHomeSelectChecked");
      } else {
        input.classList.remove("animation");
        input.previousSibling.classList.remove("optionHomeSelectChecked");
      }
    });
  }

  function clickLabel(e) {
    const optionClicked = parseInt(e.target.innerText);

    if (optionClicked !== contador) {
      clearInterval(intervalAnimationHome);
      contador = optionClicked - 1;
      arrayGeneral[contador].checked = true;
      animationInfinit();
    }
  }

  return (
    <div className="home">
      <Header />
      <Container>
        <div className="contentHome">
          <TextApresentation
            captureInputDom={(e) => captureItemDom(e)}
            handleInput={() => mapGeneral()}
            numberOption="01"
            isChecked={true}
            clickLabel={(e) => clickLabel(e)}
          />
          <TextApresentation
            captureInputDom={(e) => captureItemDom(e)}
            handleInput={() => mapGeneral()}
            numberOption="02"
            clickLabel={clickLabel}
          />
          <TextApresentation
            captureInputDom={(e) => captureItemDom(e)}
            handleInput={() => mapGeneral()}
            numberOption="03"
            clickLabel={clickLabel}
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
