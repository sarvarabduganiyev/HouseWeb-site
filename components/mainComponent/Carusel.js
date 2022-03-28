import ReactStars from "react-rating-stars-component";
import styless from "/styles/mainHouseBG.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function Carusel() {

    return (
        <div className={styless.carusel__bg}>


            <div>
                <div className="flex flex-col justify-center items-center">
                    <div className={styless.red__line}></div>
                </div>
                <div className={styless.sarlavhalar__box}>
                    <h2>Past guests.</h2>
                    <h6>Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House.</h6>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        319: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={`${styless.carusel__card} mr-32`}>
                            <div>
                                <ReactStars color={"#52503B"} size={"18"} />
                            </div>
                            <h2 className={styless.carusel__sarlavha}>We had an amazing stay at the Guest House</h2>
                            <h3 className={styless.carusel__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
                            <h2 className={styless.auther}>Nate Davidsson</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className={styless.carusel__card}>
                            <div>
                                <ReactStars color={"#52503B"} size={"18"} />
                            </div>
                            <h2 className={styless.carusel__sarlavha}>We had an amazing stay at the Guest House</h2>
                            <h3 className={styless.carusel__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
                            <h2 className={styless.auther}>Nate Davidsson</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styless.carusel__card}>
                            <div>
                                <ReactStars color={"#52503B"} size={"18"} />
                            </div>
                            <h2 className={styless.carusel__sarlavha}>We had an amazing stay at the Guest House</h2>
                            <h3 className={styless.carusel__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
                            <h2 className={styless.auther}>Nate Davidsson</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styless.carusel__card}>
                            <div>
                                <ReactStars color={"#52503B"} size={"18"} />
                            </div>
                            <h2 className={styless.carusel__sarlavha}>We had an amazing stay at the Guest House</h2>
                            <h3 className={styless.carusel__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
                            <h2 className={styless.auther}>Nate Davidsson</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styless.carusel__card}>
                            <div>
                                <ReactStars color={"#52503B"} size={"18"} />
                            </div>
                            <h2 className={styless.carusel__sarlavha}>We had an amazing stay at the Guest House</h2>
                            <h3 className={styless.carusel__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
                            <h2 className={styless.auther}>Nate Davidsson</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
}

export default Carusel;