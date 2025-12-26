import React from "react";
import companyImage from "../../assets/Image2.jpg";
import "./About.css";

const About = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <section className="about">
            <div className="about-container">
                {/* Hero 이미지 */}
                <div className="about-hero">
                    <img src={companyImage} alt="회사 전경" />
                    <div className="about-hero-overlay"></div>
                    <div className="about-hero-text">
                        <h3>ABC Company</h3>
                        <p>혁신과 신뢰로 글로벌 시장을 선도합니다.</p>
                    </div>
                </div>

                {/* 소개 */}
                <div className="about-intro">
                    <h2>회사 소개</h2>
                    <div>
                        <p>
                            ABC Company는 1995년 설립 이래로 전력 변환 장치 및 전력 제어 시스템
                            분야에서 혁신적인 솔루션을 제공해온 전기 기업입니다. 고효율 PCS, UPS,
                            변압기 등 핵심 제품 개발과 스마트 그리드 및 신재생 에너지 시스템
                            구축에 기여하고 있습니다.
                        </p>
                        <p>
                            특히 친환경 전력 시스템 기술을 바탕으로 국내외 발전소와 산업시설에
                            안정적인 전력 공급 체계를 구축하고 있으며, 지속적인 R&D 투자를 통해
                            전력 품질과 에너지 효율 향상에 기여하고 있습니다.
                        </p>
                    </div>
                </div>

                {/* 가치 */}
                <div className="about-values">
                    {[
                        { title: "혁신", desc: "끊임없는 도전과 혁신으로 미래를 선도합니다" },
                        { title: "신뢰", desc: "고객과의 신뢰를 최우선 가치로 삼습니다" },
                        { title: "성장", desc: "구성원들의 지속적인 성장을 지원합니다" },
                    ].map((value, i) => (
                        <div key={i} className="value-card">
                            <h3>{value.title}</h3>
                            <p>{value.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 비전 */}
                <div className="about-vision">
                    <h2>회사 비전</h2>
                    <p>
                        "2030년까지 글로벌 시장을 선도하는 기술 혁신 기업으로 도약하여,<br />
                        더 나은 세상을 만드는데 기여하겠습니다."
                    </p>
                </div>

                {/* 연혁 */}
                <div className="about-history">
                    <h2>회사 연혁</h2>
                    <div className="history-list">
                        {[
                            { year: "2023", event: "글로벌 시장 진출" },
                            { year: "2022", event: "시리즈 B 투자 유치" },
                            { year: "2021", event: "주요 기술 특허 획득" },
                            { year: "2020", event: "회사 설립" },
                        ].map((item, i) => (
                            <div key={i} className={`history-item ${i % 2 ? "reverse" : ""}`}>
                                <div className="history-card">
                                    <h3>{item.year}</h3>
                                    <p>{item.event}</p>
                                </div>
                                <div className="history-dot"></div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;