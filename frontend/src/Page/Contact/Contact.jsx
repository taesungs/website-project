import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const contactInfo = [
        { icon: "phone", title: "전화", info: "02-1234-5678", desc: "평일 09:00 - 18:00" },
        { icon: "envelope", title: "이메일", info: "support@example.com", desc: "24시간 접수 가능" },
        { icon: "map-marker-alt", title: "주소", info: "서울특별시 강남구 삼성동 123번지", desc: "본사" },
    ];

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>문의하기</h1>
                    <p>태양광 설비 설치부터 유지보수까지, 전문가와 상담하세요.</p>
                </div>

                <div className="contact-grid">
                    <div>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>이름</label>
                                <input type="text" placeholder="홍길동" required />
                            </div>

                            <div className="form-group">
                                <label>이메일</label>
                                <input type="email" placeholder="example@email.com" required />
                            </div>

                            <div className="form-group">
                                <label>연락처</label>
                                <input type="tel" placeholder="010-1234-5678" required />
                            </div>

                            <div className="form-group">
                                <label>문의 내용</label>
                                <textarea placeholder="문의하실 내용을 자세히 적어주세요." required></textarea>
                            </div>

                            <button className="submit-btn">문의하기</button>
                        </form>
                    </div>

                    <div className="info-section">
                        <div className="info-card">
                            <h3>연락처 정보</h3>
                            <div className="info-list">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className="info-item">
                                        <div className="icon-box">
                                            <i className={`fas fa-${item.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="map-wrapper">
                            <iframe
                                title="회사 위치"
                                src="https://www.google.com/maps/embed?pb=dummy"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="footer-link">
                    <Link to="/contact" onClick={scrollToTop}>문의 바로가기</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;