import React, { useState, useEffect } from "react";

export const DataSource = ({
  getDataFanc = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getDataFanc();
      setState(data);
    })();
  }, [getDataFanc]);
  return (
    <>
      {/* pass props to the childres */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
