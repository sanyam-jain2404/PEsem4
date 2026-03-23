import { useState,useEffect } from 'react'
import axios from 'axios';
export default function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    function fetchdata(){
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2026-02-23&sortBy=publishedAt&apiKey=b92bfdbe16bc41d6a55132b7ca692bcd")
        .then(data=>
            {setNews(data.articles);
            setLoading(false);}
        )
        .catch(error=>{setError("Data not available"); setLoading(false);})
    }
    
    useEffect(()=>{
        fetchdata();
    },[])
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>
    return (
        <div>
            <ul>
                {news.map((item,index)=><li key={index}>{item.title}</li>)}
            </ul>
        </div>
    )
}