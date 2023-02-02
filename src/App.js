import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
function App() {
  const [listData, setListData] = useState([]);
  const [typedSearch, setTypedSearch] = useState("");

  const handleData = (data, searchTerm) => {
    console.log("er4ewe", data);
    setListData(data);
    setTypedSearch(searchTerm);
  };
  return (
    <div className="App">
      <Search handleData={handleData} />
      <List listData={listData} typedSearch={typedSearch} />
    </div>
  );
}

export default App;
