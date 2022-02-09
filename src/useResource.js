import { useState, useEffect } from "react";
import axios from "axios";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(resourceUrl);
      setResource(data);
    })();
  }, [resourceUrl]);
  return resource;
};
