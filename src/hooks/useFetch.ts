import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = <T>(url: string): [T | undefined, Error | undefined] => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };

    fetchData();
  }, [url]);

  return [data, error];
};

export default useFetch;
