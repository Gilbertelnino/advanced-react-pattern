import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    })();
  }, [userId]);
  return (
    <>
      {/* pass props to the childres */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
