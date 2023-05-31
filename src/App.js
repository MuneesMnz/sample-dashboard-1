import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import ListData from "./Pages/List/ListData";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { productInput, userInput } from "./FileSource";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="users">
            <Route index element={<ListData />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInput} title="Add New User" />} />
          </Route>
          <Route path="product">
            <Route index element={<ListData />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInput} title="Add New Product" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
