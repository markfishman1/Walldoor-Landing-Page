import React from 'react';

function Info() {
    return (
        <div className="info" id="info">
            <section className="info-container">
                <section className="info-container-content">
                    <div className="info-container-content__title">
                        <h1>קצת עלינו</h1>
                    </div>
                    <div className="info-container-content__text">
                        <p className="info-container-content__text__title">
                            וולדור מתמחה בייבוא של דלתות פנים בסטנדרט ייצור
                            גבוה, הדלתות הינן בעלות מראה אקסקלוסיבי שמעבר לאיכות
                            החומרים, גם נראות מעולה. אנו מציעים מחירים
                            אטרקטיביים ושירות אמין והוגן. כל הדלתות פתוחות להצגה
                            והתרשמות בחנות התצוגה שלנו.
                        </p>
                        <p className="info-container-content__text__subtitle"></p>
                        <p className="info-container-content__text__subtitle">
                            למה כדאי לקנות אצלנו?
                        </p>
                        <div className="info-container-content__text__list">
                            <div>
                                <p>1.אספקה מהירה</p>
                                <p>2.סטנדרט ייצור גבוהה</p>
                            </div>
                            <div>
                                <p>3.עמידות ברעשים</p>
                                <p>4.מהייבואן היישר לצרכן</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Info;
