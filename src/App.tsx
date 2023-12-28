// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import PageB from "./pageB";

import { useState } from "react";

function App() {
  const [x, y] = useState(1);
  console.log("A");

  return (
    <div onClick={() => y(x + 1)}>
      {x}
      {/* <C></C> */}
    </div>
  );
}
// function C() {
//   console.log("c");

//   return <div>11232</div>;
// }

export default App;
