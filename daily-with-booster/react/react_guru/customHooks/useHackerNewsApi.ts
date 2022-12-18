import axios from "axios";
import React, { useEffect, useState } from "react";
type api = [
  React.Dispatch<React.SetStateAction<string>>,
  {
    data: { hits: [{ objectID: string; title: string }] };
    isError: boolean;
    isLoading: boolean;
  }
];
const useHackerNewsApi = (
  path = "https://hn.algolia.com/api/v1/search?query=redux"
): api => {
  const [url, setUrl] = useState(path);
  const [data, setData] = useState<{
    hits: [{ objectID: string; title: string }];
  }>({ hits: [{ objectID: "", title: "" }] });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return [setUrl, { data, isError, isLoading }];
};

export default useHackerNewsApi;
