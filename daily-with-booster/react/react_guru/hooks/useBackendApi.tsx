import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000";
const useBackendApi = (
  endpoint: string,
  method: string,
  data = null,
  headers = undefined
) => {
  const [response, setResponse] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const url = `${baseURL}/${endpoint}`;
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        switch (method.toUpperCase()) {
          case "GET":
            axios.get(url, { headers });
            break;
          case "POST":
            axios.post(url, data, { headers });
            break;
          case "PATCH":
            axios.patch(url, data, { headers });
            break;
          case "DELETE":
            axios.delete(url, { headers });
            break;
          default:
            throw new Error(`invalid method, ${method}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url, method, data, headers]);

  return { responseError, response, isLoading };
};

export default useBackendApi;
