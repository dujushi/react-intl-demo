import "./App.css";

import React from "react";
import { useIntl } from "react-intl";

function App() {
  const { formatMessage } = useIntl();
  return (
    <div className="App">
      <p>
        {formatMessage({
          defaultMessage: "Hello everyone",
        })}
      </p>
      <p>
        {formatMessage({
          defaultMessage: "Hello {who}",
        }, { who: 'World'})}
      </p>
    </div>
  );
}

export default App;
