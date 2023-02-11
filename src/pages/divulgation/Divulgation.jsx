import Container from "../../components/container/Container";

import "./style/divulgation.css";
import "./style/mqDivulgation.css";

function Divulgation() {
  return (
    <div className="containerDivulgation">
      <Container>
        <div className="divDivulgation">
          <div className="divTextsDivulgation">
            <p className="textMainDivulgation">
              Fresh Ideas, Fresh Moments Giving
            </p>
            <p className="textMainDivulgation">Wings to your Stories.</p>
            <p className="textGenericDivulgation">
              INC5000, BEST PLACES TO WORK 2019
            </p>
          </div>
          <a className="buttonDivulgation" href="#">
            START YOUR STORIES
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Divulgation;
