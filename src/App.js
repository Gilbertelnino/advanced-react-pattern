// import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import "./App.css";
import { UserInfoForm } from "./UserInfoForm";

// const UserInfoWrappe = printProps(UserInfo);
const WithUserInfoWrapper = withUser(UserInfo, "1");

function App() {
  return (
    <div className="App">
      <h1>HOCs</h1>
      {/* <UserInfoWrappe a={1} b="yes" /> */}
      <WithUserInfoWrapper />
      <UserInfoForm />
    </div>
  );
}

export default App;
