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
                        <img src="imgs/offers/second.png" alt="first offer"></img>
                        <div className="offers-container-item-content">
                            <h1>דלת אפוקסי כולל הרכבה</h1>
                            <p>דלת אפוקסי צבועה בתנור כולל הרכבה, פרזול והובלה (איזור גוש דן) ב1,440 ש"ח בלבד</p>
                        </div>
                        <div className="btn-black offers-container-item-action">
                            <a href="#book">צרו קשר</a>
                        </div>
                    </div>
                    <div className="offers-container-item">
                        <img src="imgs/offers/first.png" alt="second offer"></img>
                        <div className="offers-container-item-content">
                            <h1>דלת פולימר קלאסית</h1>
                            <p>1,100 ש"ח לדלת פולימרית מבודדת רעשים כולל פרזול, הרכבה והובלה לאיזור גוש דן </p>
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
