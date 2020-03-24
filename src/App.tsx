import * as React from "react";
import { Button } from "semantic-ui-react";

import "./styles.css";
import { CompReusavel } from "./components/CompReusavel";

interface Props {}

export default function App() {
  const handleOnClick = (message: string) => {
    alert(`You clicked: ${message}!`);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button
        primary
        onClick={() => handleOnClick("Primary Button")}
        color="olive"
      >
        Click Here
      </Button>
      <Button onClick={() => handleOnClick("Olive Button")} color="pink">
        Click Here
      </Button>
      <CompReusavel
        titulo="Exemplo reusável"
        color="yellow"
        meuClick={handleOnClick}
        size="big"
      />
    </div>
  );
}
