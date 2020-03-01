import { Coordinates } from "../lib/Coordinates"
import { msToKmh } from "../util/convertSpeed"
import { degreesToCompassDirection } from "../util/convertWindDirection"
import { OWMResponse } from "./OWMResponse"
import { WeatherWidgetInput } from "./WeatherWidgetInput"

export const getWeatherInfo = (
  OWMAppId: string,
  { lat, lon }: Coordinates
): Promise<WeatherWidgetInput> => {
  return window
    .fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWMAppId}`
    )
    .then(async resp => {
      const data: OWMResponse = await resp.json()

      return {
        icon: data.weather[0].icon,
        location: data.name,
        temperature: data.main.temp,
        wind: {
          speed: Math.round(msToKmh(data.wind.speed)),
          direction: degreesToCompassDirection(data.wind.deg),
        },
      }
    })
}
