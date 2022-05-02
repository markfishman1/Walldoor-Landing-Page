import React from 'react';

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery-container">
                <div className="gallery-container__img">
                    <img src="imgs/gallery2.JPG" alt="galleryImg"></img>
                </div>
                <div className="gallery-container__content">
                    <h1>אנחנו פתוחים</h1>
                    <p>דלתות פנים ישירות מהיבואן לצרכן. 10 שנות אחריות על נזקי מים</p>
                    <h2 className="gallery-container__content__title ">חדש בוולדור</h2>
                    <p>דלתות הזזה במגוון דגמים, השאירו פרטים ונחזור אליכם בהקדם</p>
                    <p className="gallery-titles">
                        מבצע ללקוחות האתר
                        <span> דלת פנים כולל פרזול ב850 ש"ח</span>
                    </p>
                    <div className="gallery-container__actions">
                        <div className="btn-black">
                            <a href="#book">צרו קשר</a>
                        </div>
                        <div className="btn-black">
                            <a href="#carousel">לגלריה</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
