import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewsDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=b92bfdbe16bc41d6a55132b7ca692bcd")
            .then(response => {
                const foundArticle = response.data.articles.find((item, index) => (index + 1).toString() === id);
                if (foundArticle) {
                    setArticle(foundArticle);
                } else {
                    setError("Article not found");
                }
                setLoading(false);
            })
            .catch(error => {
                setError("Data not available");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title} />
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
}