import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import Container from "../../components/container/Container";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import team1 from "../../assets/team/team-1.jpg";
import team2 from "../../assets/team/team-2.jpg";
import team3 from "../../assets/team/team-3.jpg";
import team4 from "../../assets/team/team-4.jpg";

import "./style/team.css";
import "./style/mqTeam.css";

function Team() {
  const arrayImagesTeam = [team1, team2, team3, team4];

  return (
    <div className="containerTeam">
      <Container>
        <div className="divTeam">
          <div className="divTexts">
            <p className="textGenericTeam">NICE TO MEET</p>
            <p className="textMainTeam">OUR TEAM</p>
          </div>
          <div className="divImagesTeam">
            {arrayImagesTeam.map((image) => {
              return (
                <div className="componentImage">
                  <img
                    src={image}
                    alt="Image of peoples of team"
                    className="imagesTeam"
                  />
                  <div className="afterImageTeam">
                    <p className="textMainAfterImageTeam">AMANDA STONE</p>
                    <p className="textGenericAfterImageTeam">Videographer</p>
                    <SocialMedia classPersonalization="socialMediaTeam" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="containerButtonTeam">
            <ButtonPrimary
              textButton="MEET OUT TEAM"
              classPersonalization="buttonTeam"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Team;
