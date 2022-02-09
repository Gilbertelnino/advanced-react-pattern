export const NumberedList = ({
  items,
  resourceName,
  itemComponents: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h1>{index + 1}</h1>
          <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};
