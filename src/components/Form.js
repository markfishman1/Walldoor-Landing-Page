import React, { useState } from 'react';

function Form() {
    const [userMsg, setUserMsg] = useState(false);
    var form = document.getElementById('sheetdb-form');
    const submitHandler = (e) => {
        e.preventDefault();
        fetch(form.action, {
            method: 'POST',
            body: new FormData(document.getElementById('sheetdb-form')),
        })
            .then((response) => response.json())
            .then((html) => {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
                setUserMsg(true);
                setTimeout(() => {
                    setUserMsg(false);
                }, 5000);
            });
    };
    return (
        <>
            <div className={'user-msg ' + (userMsg ? 'active' : '')}>
                <p>תודה רבה ! ניצור קשר בהקדם.</p>
            </div>
            <div className="form-container" id="book">
                <div className="form-container-upper">
                    <div className="form-container-upper__content">
                        <h1>מחירים מיוחדים לקונים בסיטונאות</h1>
                        <h2>
                            מוצרי החברה משווקים בכל רחבי הארץ למגזר הפרטי, העסקי והקבלני תוך הקפדה על מתן מענה לדרישות
                            הלקוח.
                        </h2>
                    </div>
                </div>
                <section className="form-container-lower">
                    <div className="form-container-lower__content">
                        <h1>פה לשירותכם</h1>
                        <h2>לכל שאלה או בקשה מוזמנים להשאיר פרטים ונחזור אליכם בהקדם!</h2>
                        <div className="form-content">
                            <div className="form-content-contact">
                                <h1>יצירת קשר</h1>
                                <p>0545228070</p>
                                <p>nbaruch0611@gmail.com</p>
                            </div>
                            <div className="form-content-visit" id="book">
                                <h1>מיקום</h1>
                                <p>לזרוב 7 ראשון לציון</p>
                            </div>
                            <div className="form-content-social">
                                <h1>רשתות חברתיות</h1>
                                <div>
                                    <a href="https://www.facebook.com/Walldoor-101918345782840/">פייסבוק</a>
                                    <a href="https://www.instagram.com/walldoor_1/?utm_medium=copy_link">אינסטגרם</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="form"
                        action="https://sheetdb.io/api/v1/s49v1sz8qgx9n"
                        method="POST"
                        id="sheetdb-form"
                        onSubmit={submitHandler}
                    >
                        <div className="form-inputs">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="שם מלא"
                                    required
                                    id="name"
                                    name="data[שם מלא]"
                                />
                                <label htmlFor="name" className="form-label">
                                    שם מלא
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="דואר אלקטרוני"
                                    id="email"
                                    name="data[דואר אלקטרוני]"
                                />
                                <label htmlFor="email" className="form-label">
                                    דואר אלקטרוני
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    className="form-input"
                                    placeholder=" מספר טלפון"
                                    required
                                    id="phone"
                                    name="data[מספר טלפון]"
                                />
                                <label htmlFor="phone" className="form-label">
                                    מספר טלפון
                                </label>
                            </div>
                        </div>
                        <div className="form-actions">
                            <textarea
                                className="form-input"
                                placeholder="השאירו הודעה"
                                name="data[הודעה]"
                                id="message"
                            ></textarea>
                            <button
                                className="btn-black form-btn"
                                id="contact"
                                type="submit"
                                // onClick={submitHandler}
                            >
                                <a href="###">צרו קשר</a>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Form;
