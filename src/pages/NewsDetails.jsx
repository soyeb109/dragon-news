import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [id, data]);
  return (
    <div>
      <header className="py-4">
        <Header />
      </header>
      <main className="w-11/12 mx-auto py-5 grid grid-cols-12 gap-5 p-2">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
