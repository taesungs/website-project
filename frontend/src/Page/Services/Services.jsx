import React from "react";
import "./Services.css";

const Services = () => {
    const servicesList = [
        { id: 1, title: "맞춤형 소프트웨어 개발", desc: "고객 요구에 최적화된 솔루션 제공", icon: "💻" },
        { id: 2, title: "클라우드 서비스", desc: "안정적이고 확장 가능한 인프라 구축 및 관리", icon: "☁️" },
        { id: 3, title: "보안 솔루션", desc: "최신 기술을 적용한 안전한 시스템 설계", icon: "🔒" },
        { id: 4, title: "기술 컨설팅", desc: "데이터 기반 기술 전략 수립", icon: "📊" },
    ];

    return (
        <section className="services">
            <div className="services-container">
                <div className="services-header">
                    <h1>우리의 서비스</h1>
                    <p>혁신 기술로 비즈니스 성공을 지원합니다</p>
                </div>

                <div className="services-grid">
                    {servicesList.map((s) => (
                        <div key={s.id} className="service-card">
                            <div className="icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="why-section">
                    <h2>왜 우리를 선택해야 할까요?</h2>
                    <div className="why-grid">
                        <div className="why-card"><h4>10년+ 경험</h4><p>다양한 산업 분야 프로젝트 경험</p></div>
                        <div className="why-card"><h4>전문가 팀</h4><p>숙련된 개발자와 컨설턴트 구성</p></div>
                        <div className="why-card"><h4>24/7 지원</h4><p>연중무휴 기술 지원</p></div>
                    </div>
                </div>

                <div className="process-section">
                    <h2>프로젝트 진행 프로세스</h2>
                    <div className="process-grid">
                        {[
                            { step: "01", title: "요구사항 분석", info: "고객 니즈와 목표 파악" },
                            { step: "02", title: "설계 및 기획", info: "솔루션 설계 및 계획 수립" },
                            { step: "03", title: "개발 및 테스트", info: "품질 검증과 테스트 진행" },
                            { step: "04", title: "배포 및 유지보수", info: "안정적 운영과 개선" },
                        ].map((p, i) => (
                            <div key={i} className="process-card">
                                <div className="step">{p.step}</div>
                                <h3>{p.title}</h3>
                                <p>{p.info}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cta-section">
                    <h2>프로젝트를 시작할 준비가 되셨나요?</h2>
                    <p>전문가와 상담하고 최적 솔루션을 찾아보세요</p>
                    <button className="cta-button">무료 상담 신청하기</button>
                </div>
            </div>
        </section>
    );
};
export default Services;