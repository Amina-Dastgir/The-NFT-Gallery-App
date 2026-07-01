import { useState } from "react";
import nftData from "../data/nftData";
import NFTCard from "../components/NFTCard";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import "../App.css";

function Home() {

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  let data = [...nftData];

  if (category !== "All") {
    data = data.filter((item) => item.category === category);
  }

  if (search) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "low") {
    data.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    data.sort((a, b) => b.price - a.price);
  }

  if (sort === "name") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <>
      <Navbar />

      <div className="container">

        <h1 className="title">
          Explore Amazing NFT Collection
        </h1>

        <div className="controls">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <Filter
            setCategory={setCategory}
          />

          <Sort
            setSort={setSort}
          />

        </div>

        <div className="grid">

          {data.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
            />
          ))}

        </div>

      </div>

    </>
  );
}

export default Home;