import { FaTelegramPlane } from "react-icons/fa";

import Container from "../../components/container/Container";
import myLogo from "../../assets/logo/logo.png";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import "./style/footer.css";
import ReadMore from "../blog/components/ReadMore";

function Footer() {
  return (
    <div className="ContainerFooter">
      <Container>
        <div className="divFooter">
          <div className="divFooterLogo">
            <img src={myLogo} alt="My Logo" />
            <SocialMedia classPersonalization="socialMediaFooter" />
          </div>

          <div className="divFooterLinks">
            <div className="componentLinkFooter">
              <p className="textMainFooter">About Us</p>
              <p className="textAboutUs">
                Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
                award-winning, full-service production company specializing.
              </p>
              <ReadMore />
            </div>

            <div className="componentLinkFooter">
              <p className="textMainFooter">Who we are</p>
              <div className="divLinks">
                <p className="textLinkFooter">Team</p>
                <p className="textLinkFooter">Carrers</p>
                <p className="textLinkFooter">Contact us</p>
                <p className="textLinkFooter">Locations</p>
              </div>
            </div>

            <div className="componentLinkFooter">
              <p className="textMainFooter">Our Work</p>
              <div className="divLinks">
                <p className="textLinkFooter">Feature</p>
                <p className="textLinkFooter">Latest</p>
                <p className="textLinkFooter">Browse Archive</p>
                <p className="textLinkFooter">Video for web</p>
              </div>
            </div>

            <div className="componentLinkFooter">
              <p className="textMainFooter">Newsletter</p>
              <p className="textNewsletter">
                Videoprah is an award-winning, full-service production company
                specializing.
              </p>
              <form className="formFooter" action="#">
                <input type="text" placeholder="Email" />
                <button type="submit">
                  <FaTelegramPlane />
                </button>
              </form>
            </div>
          </div>

          <div className="divFooterTextCopyright">
            <p>
              This site was created by <span>Henrique Oliveira</span> using a
              <span>
                <a href="https://colorlib.com/" target="_blank">
                  {" "}
                  Colorlib
                </a>
              </span>{" "}
              design
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
