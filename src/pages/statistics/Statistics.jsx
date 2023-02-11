import { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";

import Container from "../../components/container/Container";

import "./style/statistcs.css";
import "./style/mqStatistics.css";

import iconStatistics1 from "../../assets/icons/ci-1.png";
import iconStatistics2 from "../../assets/icons/ci-2.png";
import iconStatistics3 from "../../assets/icons/ci-3.png";
import iconStatistics4 from "../../assets/icons/ci-4.png";

function Statistics() {
  const [stateTwoHundred, setStateTwoHundred] = useState(0);
  const [stateThousand, setStateThousand] = useState(0);
  const [isObserveStatistics, setIsObserveStatistics] = useState(false);
  const elementeObserve = useRef(null);
  const configCreateStatistics = [
    {
      image: iconStatistics1,
      number: 230,
      text: "Compled Projects",
      state: stateTwoHundred,
    },
    {
      image: iconStatistics2,
      number: 1068,
      text: "Happy clients",
      state: stateThousand,
    },
    {
      image: iconStatistics3,
      number: 230,
      text: "Perspective clients",
      state: stateTwoHundred,
    },
    {
      image: iconStatistics4,
      number: 230,
      text: "Compled Projects",
      state: stateTwoHundred,
    },
  ];

  function atualizationStateNumber(state, maxNumber, setState) {
    if (state < maxNumber) {
      setTimeout(() => {
        setState((prev) => prev + 3);
      }, 0);
    }
  }

  const create = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      setIsObserveStatistics(true);
    }
  });

  useEffect(() => {
    create.observe(elementeObserve.current);
  }, [elementeObserve]);

  if (isObserveStatistics) {
    atualizationStateNumber(
      stateTwoHundred,
      configCreateStatistics[0].number,
      setStateTwoHundred
    );

    atualizationStateNumber(
      stateThousand,
      configCreateStatistics[1].number,
      setStateThousand
    );
  }

  return (
    <div className="containerStatistics">
      <Container>
        <div className="divStatistics">
          <div className="divGridStatistics" ref={elementeObserve}>
            {/* Create icons statistics */}
            {configCreateStatistics.map((configItem) => {
              return (
                <div className="gridItem" key={uuid()}>
                  <img src={configItem.image} alt="Icon Statistics" />
                  <p className="numberStatistics">{configItem.state}</p>
                  <p className="texteStatistics">{configItem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Statistics;
