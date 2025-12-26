import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Board.css";

const Board = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const dummyPosts = [
        { _id: 1, number: 1, title: "첫 번째 게시물", createdAt: "2023-11-01T10:00:00", views: 10 },
        { _id: 2, number: 2, title: "두 번째 게시물", createdAt: "2023-11-02T11:30:00", views: 20 },
        { _id: 3, number: 3, title: "세 번째 게시물", createdAt: "2023-11-03T14:00:00", views: 30 },
        { _id: 4, number: 4, title: "네 번째 게시물", createdAt: "2023-11-04T16:45:00", views: 40 },
        { _id: 5, number: 5, title: "다섯 번째 게시물", createdAt: "2023-11-05T09:15:00", views: 50 },
    ];

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <section className="board">
            <div className="board-container">
                <h1 className="board-title">업무 게시판</h1>

                <div className="board-table-wrapper">
                    <table className="board-table">
                        <thead>
                        <tr>
                            <th style={{ width: "8%" }}>번호</th>
                            <th>제목</th>
                            <th style={{ width: "15%" }}>작성일</th>
                            <th style={{ width: "8%" }}>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentPosts.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="forum-empty">최근 게시물이 없습니다.</td>
                            </tr>
                        ) : (
                            currentPosts.map((post) => (
                                <tr key={post._id}>
                                    <td>{post.number}</td>
                                    <td>{post.title}</td>
                                    <td>{new Date(post.createdAt).toLocaleString()}</td>
                                    <td>{post.views}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="board-pagination">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        이전
                    </button>
                    <span>{currentPage}</span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastPost >= dummyPosts.length}>
                        다음
                    </button>
                </div>

                <div className="leadership-footer-link">
                    <Link to="/contact" onClick={() => { scrollToTop(); scrollToTop(); }}>문의 바로가기</Link>
                </div>
            </div>
        </section>
    );
};

export default Board;