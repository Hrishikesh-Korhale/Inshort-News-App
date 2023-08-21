import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

// Components
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = ({ setProgress }) => {
  const [news, setNews] = useState([]);
  const [API_URL, setAPI_URL]= useState('/news');
  const { search } = useLocation();

  useEffect(() => {
    const getData = async (url) => {
      setProgress(40);
      let response = await getNews(url);
      setProgress(70);
      setNews(response.data);
      setProgress(100);
    };

    let newURL = '/news';
    if (search.includes("all")) {
      newURL = '/news';
    } else if (search.includes("business")) {
      newURL = '/business';
    } else if (search.includes("technology")) {
      newURL = '/technology';
    }
    
    setAPI_URL(newURL);
    console.log(newURL);
    getData(newURL);
  }, [search, setProgress, API_URL]);

  return (
    <Box>
      {news.map((data,index) => {
        return <Article key={index} data={data} />;
      })}
    </Box>
  );
};

export default Articles;
