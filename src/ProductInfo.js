export const ProductInfo = ({ product }) => {
  const { name, price, description } = product || {};
  return (
    <>
      {product ? (
        <>
          <h1>{name}</h1>
          <p>Price: {price}</p>
          <p>Description: {description}</p>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};
