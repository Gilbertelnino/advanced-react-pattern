import { SplitScreen } from "./SplitScreen";
import "./App.css";

const LeftHandComponent = ({ name }) => (
  <h1 style={{ backgroundColor: "green" }}>{name}</h1>
);
const RightHandComponent = ({ message }) => (
  <h1 style={{ backgroundColor: "red" }}>{message}</h1>
);

function App() {
  return (
    <div className="App">
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="left name" />
        <RightHandComponent message="right message" />
      </SplitScreen>
    </div>
  );
}

export default App;
