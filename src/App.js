import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import ListData from "./Pages/List/ListData";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { productInput, userInput } from "./FileSource";
import { useContext, useState } from "react";
import { DarkModeContext } from "./Context/darkModeContext";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser}=useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser);
  return (
    <div className={`${darkMode ? "bg-[#222] text-gray-300" : ""} `}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <ListData />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInput} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="product">
            <Route
              index
              element={
                <RequireAuth>
                  <ListData />
                </RequireAuth>
              }
            />
            <Route
              path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={productInput} title="Add New Product" />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
