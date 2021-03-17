import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

export const useAxios = (
  // options
  { method = "", endpoint = "", headers = {} }
) => {
  const [response, setResponse] = useState(null);
  const url = `${API_URL}${endpoint}`;

  const runAxios = async (body = {}) => {
    const res = await axios({ method, url, body, headers });
    setResponse(res.data);
    return res.data;
  };
  return { response, runAxios };
};
