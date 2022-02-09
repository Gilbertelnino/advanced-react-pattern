export const LargeProductListItem = ({ product }) => {
  const { name, price, description } = product;
  return (
    <>
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </>
  );
};
