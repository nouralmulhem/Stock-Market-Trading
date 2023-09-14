import axios from "../../../../services/instance";

export const getUserInfo = async <T>(
  username: string | undefined
): Promise<T> => {
  username = "2"; // this is only to simulate the endpoint

  // const [data] = useFetch<user>(`http://localhost:8000/users/${username}`);

  const res = await axios.get(`http://localhost:8000/users/${username}`);
  return res.data as T;
};
