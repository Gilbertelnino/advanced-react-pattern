export const RegularList = ({
  items,
  resourceName,
  itemComponents: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
