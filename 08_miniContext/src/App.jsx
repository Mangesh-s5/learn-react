import { useState } from "react";
import UserContextProvider from "./Context/UserContexProvider";
import Login from "./Components/login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Radha rani ki jay </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
