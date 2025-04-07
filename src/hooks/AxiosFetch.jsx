// src/hooks/useAxiosFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const AxiosFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken;

    const fetchData = async () => {
      try {
        cancelToken = axios.CancelToken.source();
        const response = await axios.get(url, {
          cancelToken: cancelToken.token,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request dibatalkan", err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (cancelToken) {
        cancelToken.cancel("Request dibatalkan saat unmount");
      }
    };
  }, [url]);

  return { data, loading, error };
};

export default AxiosFetch;
