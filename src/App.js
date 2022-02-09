// import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
// import { UserLoader } from "./UserLoader";
import "./App.css";
import { ProductInfo } from "./ProductInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const { data } = await axios.get(url);
  return data;
};

const getLocalStorageData = (key) => () => {
  const data = localStorage.getItem(key);
  return data;
};

const Text = ({ message }) => <div>{message}</div>;

function App() {
  return (
    // <div className="App">
    //   <UserLoader userId={4}>
    //     <UserInfo />
    //   </UserLoader>
    // </div>
    // <div className="App">
    //   <ResourceLoader resourceUrl="/users/1" resourceName="user">
    //     <UserInfo />
    //   </ResourceLoader>
    //   <ResourceLoader resourceUrl="/products/4" resourceName="product">
    //     <ProductInfo />
    //   </ResourceLoader>
    // </div>
    <div className="App">
      <DataSource getDataFanc={getServerData("/users/1")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFanc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </div>
  );
}

export default App;
