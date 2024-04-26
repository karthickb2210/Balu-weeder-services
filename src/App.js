import React from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/layout/layout";
import Foot from "./components/foot";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./components/context/userContext";
function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          {/* <Sales /> */}

          <Navbar />

          <Layout />
          {/* <MainPage /> */}
          <Foot />
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
