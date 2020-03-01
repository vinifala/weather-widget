import * as React from "react"
import * as ReactDOM from "react-dom"

import { App } from "./App"

ReactDOM.render(
  <App OWMAppId={appConfig.OWMAppId} />,
  document.getElementById("root")
)
