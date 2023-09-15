import axios from "../../../../services/instance";

export const getUserInfo = async <T>(
  username: string | undefined
): Promise<T> => {
  // const [data] = useFetch<user>(`http://localhost:8000/users/${username}`);

  const res = await axios.get(`http://localhost:8000/users/${username}`);
  return res.data as T;
};
