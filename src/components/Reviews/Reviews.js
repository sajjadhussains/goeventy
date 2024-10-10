import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import personImage from "@/assets/person.png";

const Reviews = () => {

  return (
    <section className="review-section-container">
      <div className="container-xl ">
        <div className="review-content">
          <div className=" text-content">
            <div className="message">
              <p className="message-text">
                “GoEventy simplifies ticketing with seamless technology and
                unmatched support, transforming event organization
                effortlessly.”
              </p>
            </div>
            <hr className="tab-line" />
            <div className="reviewer">
              <h4 className="reviewer-name">Jermaya Leijen</h4>
              <p className="reviewer-designation">Public Speaker</p>
            </div>
          </div>
          <div className="slider-content">
            <div className="slide-image">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src={personImage}
                    width="100%"
                    priority={false}
                    height="100%"
                    alt="person"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={personImage}
                    width="100%"
                    priority={false}
                    height="100%"
                    alt="person"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={personImage}
                    width="100%"
                    priority={false}
                    height="100%"
                    alt="person"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={personImage}
                    width="100%"
                    priority={false}
                    height="100%"
                    alt="person"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={personImage}
                    width="100%"
                    priority={false}
                    height="100%"
                    alt="person"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
