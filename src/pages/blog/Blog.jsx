import { Pagination, A11y, Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../components/container/Container";

import "./style/blog.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/scrollbar";
import uuid from "react-uuid";
import ReadMore from "./components/ReadMore";

function Blog() {
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
              slidesPerView={3}
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
