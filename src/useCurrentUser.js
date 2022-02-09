import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/current-user");
      setUser(data);
    })();
  }, []);
  return user;
};
