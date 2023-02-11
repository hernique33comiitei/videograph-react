import { Pagination, A11y, Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

import Container from "../../components/container/Container";
import ReadMore from "./components/ReadMore";

import "./style/blog.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/scrollbar";

function Blog() {
  const [slidesPerViewState, setSlidesPerViewState] = useState(3);

  function slidesPerView() {
    const widthBody = document.body.clientWidth;
    console.log(widthBody);
    if (widthBody <= 630) {
      return setSlidesPerViewState(1);
    }
    if (widthBody <= 930) {
      return setSlidesPerViewState(2);
    }
    return setSlidesPerViewState(3);
  }

  window.addEventListener("resize", slidesPerView);

  useEffect(() => {
    slidesPerView();
  }, []);

  return (
    <div className="containerBlog">
      <Container>
        <div className="divBlog">
          <div className="containerTextsMainBlog">
            <p className="textSubTitleBlog">OUR BLOG</p>
            <p className="textMainTitleBlog">BLOG UPDATE</p>
          </div>

          <div className="swiperDiv">
            <Swiper
              className="swiperRoot"
              modules={[Pagination, A11y, Autoplay, Virtual]}
              spaceBetween={30}
              slidesPerView={slidesPerViewState}
              pagination={{ clickable: true }}
              autoplay={{
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: true,
              }}
              loop={true}
              virtual
            >
              {Array.from({ length: 12 }).map((item, index) => {
                return (
                  <SwiperSlide
                    className="postBlog"
                    key={uuid()}
                    virtualIndex={index}
                  >
                    <p className="textMainSlide">
                      What Makes Users Want to Share a Video on Social Media?
                    </p>
                    <p className="dataAndCommentsInSlides">
                      Jan 03, 2023 / 05 Comment
                    </p>
                    <p className="textGenericSlide">
                      We recently launched a new website for a Vital client and
                      wanted to share some of the cool features we were able...
                    </p>
                    <ReadMore />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
