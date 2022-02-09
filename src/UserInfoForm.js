// import { withEditableUser } from "./withEditableUser";
import { withEditableResource } from "./withEditableResource";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
      <>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
        <label>Hair Color: </label>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button onClick={onSaveUser}>Save</button>
        <button onClick={onResetUser}>Reset</button>
      </>
    ) : (
      <h1>Loading...</h1>
    );
  },
  "/users/1",
  "user"
);
