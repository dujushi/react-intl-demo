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
        {formatMessage(
          {
            defaultMessage: "Hello {who}",
          },
          { who: "World" }
        )}
      </p>
      <p>
        {formatMessage(
          {
            defaultMessage: `
{gender, select,
    male {He}
    female {She}
    other {They}
} will respond shortly.`,
          },
          { gender: "female" }
        )}
      </p>
    </div>
  );
}

export default App;
