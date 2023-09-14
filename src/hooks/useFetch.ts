// import { useState, useEffect } from "react";
// import axios from "../services/instance";

// const useFetch = <T>(url: string): [T | null, any, number | null] => {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<any>(null);
//   const [statusCode, setStatusCode] = useState<number | null>(null);
//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         setData(response.data);
//         setStatusCode(response.status);
//       })
//       .catch((error) => {
//         setError(error);
//         setStatusCode(error.response?.status || null);
//       });
//   }, [url]);

//   return [data, error, statusCode];
// };

// export default useFetch;
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
