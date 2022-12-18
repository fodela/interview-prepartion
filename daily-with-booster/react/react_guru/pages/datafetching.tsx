import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

const DataFetching = () => {
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);
  const [query, setQuery] = useState("redux");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetchError(false);
        setIsLoading(true);
        console.log("fetching data...");
        const result = await axios(url);
        setData(result.data);
      } catch (err) {
        console.log(err);
        setIsFetchError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

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
        ) : isFetchError ? (
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
