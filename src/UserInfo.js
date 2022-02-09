// import { useCurrentUser } from "./useCurrentUser";
// import { useUser } from "./useUser";
import { useResource } from "./useResource";
import { useDataResource } from "./useDataSource";
import axios from "axios";

const serverResource = (url) => async () => {
  const { data } = await axios.get(url);
  return data;
};

// how does this syntax work? for example, const serverResource = (url) => async () => {}

const localStorageResource = (key) => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  // const user = useResource(`/users/${userId}`);
  const user = useDataResource(serverResource(`/users/${userId}`));
  // const localUser = useDataResource(localStorageResource(`user-${userId}`));

  const { name, age, hairColor, hobbies } = user || {};
  return (
    <>
      {user ? (
        <>
          <h1>{name}</h1>
          <p>Age: {age}</p>
          <p>Hair Color: {hairColor}</p>
          <h3>Hobbies</h3>
          <ul>
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
