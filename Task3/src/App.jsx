import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostForm from "./Pages/PostForm";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./Pages/PostList";

function App() {
  return (
    <BrowserRouter>
      <div className="container" id="main">
        <PostForm />
        <PostList />
      </div>
    </BrowserRouter>
  );
}

export default App;
