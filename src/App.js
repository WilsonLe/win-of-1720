import React from "react";

import WinXP from "WinXP";
import { useGA } from "hooks";

const App = () => {
  useGA("UA-168929276-1", "win-of-1720");
  return <WinXP />;
};

export default App;
