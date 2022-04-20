import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Carrousel from "../../components/CarrouselNews";

export default function Inicio() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://calcium-post-237311.firebaseio.com/news.json")
      .then((res) => {
        const date = res.data.filter((item) => {
          if (item != null) return item;
        });
        setNews(date);
      });
  }, []);

  return (
    <div className="inicio">
      <Carrousel news={news} />
    </div>
  );
}
