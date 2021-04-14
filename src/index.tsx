import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const locale = 'fr';
import(`./lang/${locale}.json`).then(messages => ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
