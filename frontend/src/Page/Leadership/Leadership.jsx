import React from "react";
import { Link } from "react-router-dom";
import Human1 from "../../assets/Human1.jpg";
import "./Leadership.css";

const Leadership = () => {
    const executives = [
        {
            name: "이부사장",
            role: "COO",
            description: "효율적인 기업 운영과 프로세스 혁신을 주도하고 있습니다.",
            imageUrl: Human1,
        },
        {
            name: "박이사",
            role: "CTO",
            description: "최신 기술 트렌드를 선도하며 R&D를 총괄하고 있습니다.",
            imageUrl: Human1,
        },
        {
            name: "김이사",
            role: "CFO",
            description: "재무 전략 수립과 기업 가치 향상을 담당하고 있습니다.",
            imageUrl: Human1,
        },
        {
            name: "최이사",
            role: "CMO",
            description: "글로벌 마케팅과 브랜드 가치 향상을 주도합니다.",
            imageUrl: Human1,
        },
    ];

    const teamMembers = [
        {
            name: "정과장",
            role: "개발팀장",
            description: "신제품 개발 및 기술 혁신을 이끌고 있습니다.",
            imageUrl: Human1,
        },
        {
            name: "최과장",
            role: "영업팀장",
            description: "글로벌 시장 개척 및 고객 관리를 담당합니다.",
            imageUrl: Human1,
        },
        {
            name: "한과장",
            role: "품질관리팀장",
            description: "제품 품질 향상 및 시스템 관리를 총괄합니다.",
            imageUrl: Human1,
        },
        {
            name: "김과장",
            role: "인사팀장",
            description: "인사 정책 수립 및 조직 문화를 관리합니다.",
            imageUrl: Human1,
        },
    ];

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <section className="leadership">
            <div className="leadership-container">

                {/* 헤더 */}
                <div className="leadership-header">
                    <h1 className="leadership-title">임원진 소개</h1>
                    <p className="leadership-subtitle">혁신과 성장을 이끄는 리더십</p>
                </div>

                {/* CEO 영역 */}
                <div className="ceo-section">
                    <div className="ceo-text">
                        <h2>CEO 인사말</h2>
                        <div className="ceo-message">
                            <p>안녕하십니까, ABC Company 대표이사 김대표입니다.</p>
                            <p>20년 이상의 산업 경험을 기반으로 혁신 기술과 고객 가치를 실현하겠습니다.</p>
                            <p>지속적인 R&D와 품질 혁신으로 글로벌 시장에서도 경쟁력을 확보하겠습니다.</p>
                        </div>
                        <p className="ceo-signoff">대표이사 김대표 드림</p>
                    </div>

                    <div className="ceo-image-wrapper">
                        <img src={Human1} alt="CEO" />
                        <div className="card-body">
                            <p className="ceo-name">김대표</p>
                            <p className="ceo-position">대표이사</p>
                        </div>
                    </div>
                </div>

                {/* 경영진 grid */}
                <div className="team-grid">
                    <h2>경영진</h2>
                    {executives.map((ex, i) => (
                        <div key={i} className="member-card">
                            <img src={ex.imageUrl} alt={ex.name} />
                            <div className="card-body">
                                <p className="member-name">{ex.name}</p>
                                <p className="member-role">{ex.role}</p>
                                <p className="member-description">{ex.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 핵심 구성원 grid */}
                <div className="team-grid">
                    <h2>핵심 구성원</h2>
                    {teamMembers.map((m, i) => (
                        <div key={i} className="member-card">
                            <img src={m.imageUrl} alt={m.name} />
                            <div className="card-body">
                                <p className="member-name">{m.name}</p>
                                <p className="member-role">{m.role}</p>
                                <p className="member-description">{m.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 하단 링크 */}
                <div className="leadership-footer-link">
                    <Link to="/contact" onClick={scrollToTop}>문의 바로가기</Link>
                </div>

            </div>
        </section>
    );
};

export default Leadership;