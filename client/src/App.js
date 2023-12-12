// src/App.js
import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import Post from "./component/Post";
import { useState } from "react";
const GET_POST = gql`
  query Post($posterName: String) {
    post(posterName: $posterName) {
      posterName
      dateTime
      content
    }
  }
`;

function App() {
  const [search, setSearch] = useState("John Doe");
  const { loading, error, data, refetch } = useQuery(GET_POST, {
    variables: { posterName: "" }, // Pass the desired posterName
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    refetch({ posterName: search }); // Manually refetch data with the updated search term
  };
  let { posterName, dateTime, content } = [null, null, null];
  if (data && data.post) {
    posterName = data.post.posterName;
    dateTime = data.post.dateTime;
    content = data.post.content;
  }

  console.log(data);
  return (
    <div>
      <div className="search-box">
        <label htmlFor="search">Search Poster Name:</label>
        <input type="text" id="search" value={search} onChange={handleSearch} />
      </div>
      <button onClick={handleSearchClick}>Search</button>
      {data && (
        <Post posterName={posterName} dateTime={dateTime} content={content} />
      )}
    </div>
  );
}

export default App;
