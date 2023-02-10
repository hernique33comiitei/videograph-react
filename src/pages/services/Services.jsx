import shortid from "shortid";
import uuid from "react-uuid";

import Container from "../../components/container/Container";
import ApresentationModel from "./components/ApresentationModel";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";

import motionIcon from "../../assets/icons/si-1.png";
import editingIcon from "../../assets/icons/si-2.png";
import createVideoIcon from "../../assets/icons/si-3.png";
import hostVideoICon from "../../assets/icons/si-4.png";

import "./styles/services.css";

function Services() {
  const icons = [motionIcon, editingIcon, createVideoIcon, hostVideoICon];

  return (
    <div className="containerServices">
      <Container>
        <div className="services">
          <ApresentationModel
            image={motionIcon}
            alternativeText="OUR SERVICES"
            title="WHAT WE DO?"
            text="If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is over."
            type="no-image"
          />

          <div className="divButtonPrimaryService">
            <ButtonPrimary textButton="View all services" />
          </div>

          {icons.map((icon) => (
            <ApresentationModel
              key={uuid()}
              image={icon}
              title="Motion graphics"
              text="Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
              type="image"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Services;
