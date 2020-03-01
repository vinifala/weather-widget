import { CompassDirection } from "./CompassDirection"

export interface WeatherWidgetInput {
  icon?: string
  location: string
  temperature: number
  wind: {
    speed: number
    direction: CompassDirection
  }
}
