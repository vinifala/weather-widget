import * as React from "react"

import { Form, FormValue } from "../components"
import { WeatherWidget } from "../components"

interface Action {
  type: keyof FormValue
  payload: string
}

const reducer = (state: FormValue, { type, payload }: Action): FormValue => {
  const valueTransformLookup = {
    temperature: (t: string): "F" | "C" =>
      t.toUpperCase() === "F" ? "F" : "C",
    title: (t: string): string => t.toUpperCase(),
    wind: (w: string): boolean => !!w,
  }

  return { ...state, [type]: valueTransformLookup[type](payload) }
}

interface AppProps {
  OWMAppId: string
}

export const App: React.FC<AppProps> = ({ OWMAppId }: AppProps) => {
  const [formValue, dispatch] = React.useReducer(reducer, {
    temperature: "C",
    title: "",
    wind: true,
  })

  return (
    <div>
      <Form
        initialValue={formValue}
        onChange={(e): void => {
          dispatch({ type: e[0], payload: e[1] })
        }}
      />
      <WeatherWidget
        OWMAppId={OWMAppId}
        displayWind={formValue.wind}
        title={formValue.title || "TITLE OF WIDGET"}
        units={formValue.temperature}
      />
    </div>
  )
}
