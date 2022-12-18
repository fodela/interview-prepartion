import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import useHackerNewsApi from "../customHooks/useHackerNewsApi";

const DataFetching = () => {
  const [query, setQuery] = useState("redux");

  const [setUrl, { data, isError, isLoading }] = useHackerNewsApi();

  const handleFetch = (event: FormEvent, query: string) => {
    event.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
  };
  return (
    <>
      <form onSubmit={(event) => handleFetch(event, query)}>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button type="submit">fetch</button>
      </form>
      <div>
        {isLoading ? (
          <div>Loading... Please wait</div>
        ) : isError ? (
          <div>An error occured</div>
        ) : (
          <ul>
            {data &&
              data.hits.map((item) => (
                <li key={item.objectID}>{item.title}</li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DataFetching;
