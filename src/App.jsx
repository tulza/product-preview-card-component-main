import { useState } from "react";
import "./style/styles.css";
import Card from "./Components/Card";
import CursorOverlay from "./Components/cursorOverlay";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-Cream">
        <Card />
      </div>
    </>
  );
}

export default App;
