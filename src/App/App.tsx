import * as React from "react"
import styled from "styled-components"

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

const Container = styled.div`
  background-color: #f5f5f5;
  border: #c5c5c5 1px solid;
  border-radius: 0 0 5px 5px;
  display: flex;
  font-family: "Open Sans", sans-serif;
  margin-left: 20px;
  margin-top: 32px;
  padding: 64px;
  position: relative;

  &:before {
    background-color: #1976d2;
    content: "";
    display: block;
    height: 4px;
    left: 0;
    position: absolute;
    top: -13px;
    width: 100%;
  }
`

export const App: React.FC<AppProps> = ({ OWMAppId }: AppProps) => {
  const [formValue, dispatch] = React.useReducer(reducer, {
    temperature: "C",
    title: "",
    wind: true,
  })

  return (
    <Container>
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
    </Container>
  )
}
