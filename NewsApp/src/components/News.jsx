import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const[currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 6;

    function fetchdata() {
        setLoading(true);

        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=b92bfdbe16bc41d6a55132b7ca692bcd")
            .then(response => {
                setNews(response.data.articles.map((article, index) => ({ ...article, id: index + 1 })));
                setLoading(false);
            })
            .catch(error => {
                setError("Data not available");
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchdata();
    }, []);
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentNews = news.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(news.length / itemPerPage);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div>
            <ul>
                {currentNews.map((item, index) => (
                    <li key={item.id}><Link to={`/news/${item.id}`}>{item.title}</Link></li>
                ))}
            </ul>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}
            <span> {currentPage} of {totalPages} </span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}