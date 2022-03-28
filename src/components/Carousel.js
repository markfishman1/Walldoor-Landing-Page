import React, { useEffect, useState } from 'react';
import doorsDB from '../data/imgsDB.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination]);

function Carousel(props) {
    const [doorState, setDoorsForPreview] = useState({
        doorType: 'EPOXY',
        isClicked: true,
    });

    const setDoors = (name) => {
        setDoorsForPreview({ doorType: name, isClicked: true });
    };

    const doors = doorsDB.find((door) => {
        return door.doorType === doorState.doorType;
    });

    const buttons = doorsDB.map((door, idx) => {
        return (
            <div
                className={
                    'carousel-btn ' +
                    (door.doorType === doorState.doorType
                        ? 'selected noHover'
                        : '')
                }
                onClick={() => setDoors(door.doorType)}
                key={idx}
            >
                {door.doorTypeHE}
            </div>
        );
    });

    return (
        <div className="carousel-container">
            <div className="carousel-container__upper">
                <h1 className="carousel-container__upper__title">
                    הדגמים שלנו:
                </h1>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={
                    doorState.doorType !== 'EPOXY' || props.windowWidth < 800
                        ? 1
                        : 3
                }
                modules={[Navigation, Pagination]}
                navigation={true}
            >
                {doors.doorsArr.map((door) => {
                    return (
                        <SwiperSlide className="centered" id="carousel">
                            <img
                                src={door.imgUrl}
                                id={door.id}
                                alt="img"
                                className="door-img"
                            ></img>
                            <div className="swiper-details">
                                <p className="swiper-details__name">
                                    דגם {door.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="carousel-container__actions">{buttons}</div>
        </div>
    );
}

export default Carousel;
