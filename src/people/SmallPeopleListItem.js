export const SmallPeopleListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
