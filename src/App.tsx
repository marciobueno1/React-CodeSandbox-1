import * as React from "react";
import { Button } from "semantic-ui-react";

import "./styles.css";

interface Props {}

export default function App() {
  const handleOnClick = () => {
    alert("You clicked!");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button onClick={handleOnClick} color="olive">
        Click Here
      </Button>
    </div>
  );
}
