import { useEffect, useState } from "react";
import { Box } from "@mui/material";

// Components
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = ({ setProgress }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
    // eslint-disable-next-line
  }, []);

  const dailyNews = async () => {
    setProgress(40);
    let response = await getNews();
    setProgress(70);
    setNews(response.data);
    setProgress(100);
  };

  return (
    <Box>
      {news.map((data,index) => {
        return <Article key={index} data={data} />;
      })}
    </Box>
  );
};

export default Articles;
