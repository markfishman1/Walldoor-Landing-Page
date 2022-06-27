import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import offersDb from '../data/offersDB.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);
function Offers() {
    return (
        <>
            <section className="offers">
                <div className="offers-title">
                    <h1> מבצעים מיוחדים ללקוחות האתר</h1>
                </div>
                <div className="offers-container">
                    <div className="offers-container-item">
                        <img src="imgs/offers/second.jpg" alt="first offer"></img>
                        <div className="offers-container-item-content">
                            <h1>דלת אפוקסי כולל הרכבה</h1>
                            <p>דלת אפוקסי 5 שכבות צבע בתנור ב1440 ש"ח לדלת כולל הרכבה ופרזול</p>
                        </div>
                        <div className="btn-black offers-container-item-action">
                            <a href="#book">צרו קשר</a>
                        </div>
                    </div>
                    <div className="offers-container-item">
                        <img src="imgs/offers/first.jpg" alt="second offer"></img>
                        <div className="offers-container-item-content">
                            <h1>מבצע בקנייה מרובה</h1>
                            <p>
                                מבצע מיוחד על כל סוגי הדלתות, 1100 ש"ח בלבד לדלת כולל הרכבה ופרזול בקנייה של 4 דלתות
                                ומעלה
                            </p>
                        </div>
                        <div className="btn-black offers-container-item-action">
                            <a href="#book">צרו קשר</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
        // <>
        //     <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation, Pagination]} navigation={true}>
        //         {offersDb.map((offer) => {
        //             return (
        //                 <SwiperSlide className="centered" id="carousel">
        //                     <div className="offer-img-container">
        //                         <img src={offer.imgUrl} id={offer.name} alt="img" className="offer-img"></img>
        //                     </div>
        //                     <div className="swiper-details">
        //                         {/* <p className="swiper-details__name">דגם {door.name}</p> */}
        //                     </div>
        //                 </SwiperSlide>
        //             );
        //         })}
        //     </Swiper>
        // </>
    );
}

export default Offers;
