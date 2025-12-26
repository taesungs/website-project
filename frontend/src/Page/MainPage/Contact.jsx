import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                {/* 제목 */}
                <div className="contact-header">
                    <h2 className="contact-title">문의하기</h2>
                    <p className="contact-subtitle">
                        궁금하신 점이 있으신가요? 언제든 문의해주세요.
                    </p>
                </div>

                {/* 문의 정보 카드 */}
                <div className="contact-cards">
                    {[
                        {
                            title: "전화 문의",
                            info: "02-1234-5678",
                            subInfo: "평일 09:00 - 18:00",
                        },
                        {
                            title: "이메일 문의",
                            info: "support@example.com",
                            subInfo: "24시간 접수 가능",
                        },
                        {
                            title: "위치",
                            info: "서울특별시 강남구",
                            subInfo: "삼성동 123번지",
                        },
                    ].map((item, index) => (
                        <div key={index} className="contact-card">
                            <h3 className="contact-card-title">{item.title}</h3>
                            <p className="contact-card-info">{item.info}</p>
                            <p className="contact-card-sub">{item.subInfo}</p>
                        </div>
                    ))}
                </div>

                {/* 지도 */}
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.279301018033!2d126.9754847612344!3d37.572040327749015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2sGwanghwamun%20Square!5e0!3m2!1sen!2skr!4v1735115389923!5m2!1sen!2skr"
                        title="회사 위치"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* 버튼 */}
                <div className="contact-action">
                    <Link to="/contact" className="contact-button">
                        문의하기
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;