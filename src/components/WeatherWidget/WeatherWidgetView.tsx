import * as React from "react"

export interface WeatherWidgetViewProps {
  icon?: string
  location: string
  temperature: number
  title: string
  wind?: string
}

export const WeatherWidgetView: React.FC<WeatherWidgetViewProps> = (
  props: WeatherWidgetViewProps
) => (
  <div>
    <div>{props.title}</div>
    <div>{props.icon && <img src={props.icon} />}</div>
    <div>
      <div>{props.location}</div>
      <div>{props.temperature}&deg;</div>
      {props.wind && <div>Wind {props.wind}</div>}
    </div>
  </div>
)
