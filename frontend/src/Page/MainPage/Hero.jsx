import React from "react";
import HeroImage from "../../assets/Image1.jpg";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    {/* 텍스트 영역 */}
                    <div className="hero-text">
                        <h1 className="hero-title">
                            태양광 설비 전문가와 함께
                            <span className="hero-highlight">
                미래를 만들어갑니다.
              </span>
                        </h1>

                        <p className="hero-description">
                            안전하고 효율적인 태양광 설비 설치부터 유지보수까지,
                            전문가들이 함께합니다.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-primary">상담 신청하기</button>
                            <button className="btn-secondary">더 알아보기</button>
                        </div>
                    </div>

                    {/* 이미지 영역 */}
                    <div className="hero-image-wrapper">
                        <img
                            src={HeroImage}
                            alt="태양광 설비"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>

            {/* 하단 통계 */}
            <div className="hero-stats">
                {[
                    { number: "1,200+", label: "설치 완료" },
                    { number: "98%", label: "고객 만족도" },
                    { number: "15년+", label: "업계 경력" },
                    { number: "24/7", label: "기술 지원" },
                ].map((stat, index) => (
                    <div key={index} className="hero-stat">
                        <div className="hero-stat-number">{stat.number}</div>
                        <div className="hero-stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;