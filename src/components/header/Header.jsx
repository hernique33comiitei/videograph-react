import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import myLogo from "../../assets/logo/logo.png";
import SocialMedia from "../socialMedia/SocialMedia";
import Container from "../../components/container/Container";

import "../../styles/header.css";

function Header() {
  const [mobileOrDeskHeader, setMobileOrDeskHeader] = useState(true);
  // TRUE = DESK
  // FALSE = MOBILE

  function mobileOrDeskHeaderFunction() {
    const bodyWidth = document.body.clientWidth;

    if (bodyWidth <= 1100) {
      return setMobileOrDeskHeader(false);
    }
    return setMobileOrDeskHeader(true);
  }

  window.addEventListener("resize", mobileOrDeskHeaderFunction);
  useEffect(() => {
    mobileOrDeskHeaderFunction();
  }, []);

  return (
    <div className="containerHeader">
      <Container>
        {mobileOrDeskHeader ? (
          <>
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
          </>
        ) : (
          <>
            <img className="myLogoHeader" src={myLogo} alt="myLogo" />

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="buttonMenuMobile">
                <div>
                  <BiMenu />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="containerMenuMobile">
                  <DropdownMenu.Item className="optionMenuClass">
                    <a href="#">HOME</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="optionMenuClass">
                    <a href="#">ABOUT</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="optionMenuClass">
                    <a href="#">PORTFOLIO</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="optionMenuClass">
                    <a href="#">SERVICES</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="optionMenuClass">
                    <a href="#">PAGES</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="optionMenuClass">
                    <a href="#">CONTACT</a>
                  </DropdownMenu.Item>

                  <DropdownMenu.Arrow className="arrowMenuMobile" />
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </>
        )}
      </Container>
    </div>
  );
}

export default Header;
