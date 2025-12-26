import React from "react";
import { Link } from "react-router-dom";
import "./Forum.css";

const Forum = () => {
    const dummyPosts = [
        {
            _id: 1,
            number: 1,
            title: "첫 번째 게시물",
            views: 120,
            fileUrl: ["file1"],
            createdAt: "2023-01-01",
        },
        {
            _id: 2,
            number: 2,
            title: "두 번째 게시물",
            views: 95,
            fileUrl: [],
            createdAt: "2023-01-05",
        },
        {
            _id: 3,
            number: 3,
            title: "세 번째 게시물",
            views: 70,
            fileUrl: ["file2", "file3"],
            createdAt: "2023-01-10",
        },
        {
            _id: 4,
            number: 4,
            title: "네 번째 게시물",
            views: 50,
            fileUrl: [],
            createdAt: "2023-01-15",
        },
        {
            _id: 5,
            number: 5,
            title: "다섯 번째 게시물",
            views: 30,
            fileUrl: ["file4"],
            createdAt: "2023-01-20",
        },
    ];

    return (
        <section className="forum">
            <div className="forum-container">
                {/* 제목 */}
                <div className="forum-header">
                    <h2 className="forum-title">업무 게시판</h2>
                </div>

                {/* 전체보기 버튼 */}
                <div className="forum-actions">
                    <Link
                        to="/board"
                        className="forum-more"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        전체보기
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="arrow-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>

                {/* 게시글 목록 */}
                <div className="forum-list">
                    {dummyPosts.length === 0 ? (
                        <div className="forum-empty">최근 게시물이 없습니다.</div>
                    ) : (
                        dummyPosts.map((post) => (
                            <div key={post._id} className="forum-item">
                                <div className="forum-item-inner">
                                    <div className="forum-info">
                                        <div className="forum-meta">
                                            <span>No. {post.number}</span>
                                            <span>조회수: {post.views}</span>
                                            {post.fileUrl.length > 0 && (
                                                <span>파일: {post.fileUrl.length}</span>
                                            )}
                                        </div>

                                        <h3 className="forum-item-title">{post.title}</h3>
                                        <div className="forum-date">{post.createdAt}</div>
                                    </div>

                                    <div className="forum-arrow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="arrow-icon large"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Forum;