import "../../styles/header.css";
import myLogo from "../../assets/logo/logo.png";
import SocialMedia from "../socialMedia/SocialMedia";
import Container from "../../components/container/Container";

function Header() {
  return (
    <div className="containerHeader">
      <Container>
        <img className="myLogoHeader" src={myLogo} alt="myLogo" />
        <div className="containerOptionsHeader">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">SERVICES</a>
          <a href="#">PAGES</a>
          <a href="#">CONTACT</a>
        </div>
        <SocialMedia />
      </Container>
    </div>
  );
}

export default Header;
