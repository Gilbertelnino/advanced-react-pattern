// import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Custom hooks</h1>

      <UserInfo userId={1} />
      <UserInfo userId={2} />
      <UserInfo userId={3} />
    </div>
  );
}

export default App;
