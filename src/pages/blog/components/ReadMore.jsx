import { BsArrowRight } from "react-icons/bs";

import "../style/readMore.css";

function ReadMore() {
  return (
    <button className="btnReadMoreBlog" type="button">
      Read more <BsArrowRight />
    </button>
  );
}

export default ReadMore;
