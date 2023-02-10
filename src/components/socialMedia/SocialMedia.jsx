import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../../styles/socialMedia.css";

function SocialMedia({ classPersonalization }) {
  return (
    <div className={`containerSocialMedia ${classPersonalization}`}>
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaDribbble />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaYoutube />
      </a>
    </div>
  );
}

export default SocialMedia;
