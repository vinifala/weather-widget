import * as React from "react"

import { getWeatherInfo } from "../../lib/APIConnector"
import { Coordinates } from "../../lib/Coordinates"
import { WeatherWidgetInput } from "../../lib/WeatherWidgetInput"
import { kelvinToC, kelvinToF } from "../../util/convertTemperature"
import { WeatherWidgetView } from "./WeatherWidgetView"

export interface WeatherWidgetProps {
  displayWind: boolean
  OWMAppId: string
  title: string
  units: "C" | "F"
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = (
  props: WeatherWidgetProps
) => {
  const [coords, setCoords] = React.useState<Coordinates>(null)
  const [weatherData, setWeatherData] = React.useState<WeatherWidgetInput>(null)
  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(geolocation => {
      setCoords({
        lat: geolocation.coords.latitude,
        lon: geolocation.coords.longitude,
      })
    })
  }, [])
  React.useEffect(() => {
    if (coords) {
      getWeatherInfo(props.OWMAppId, coords).then(setWeatherData)
    }
  }, [coords])

  return !weatherData || !coords ? (
    <div>Loading...</div>
  ) : (
    <WeatherWidgetView
      icon={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
      location={weatherData.location}
      temperature={
        props.units && props.units === "F"
          ? Math.round(kelvinToF(weatherData.temperature))
          : Math.round(kelvinToC(weatherData.temperature))
      }
      title={props.title}
      wind={
        props.displayWind &&
        `${weatherData.wind.direction} ${weatherData.wind.speed}Km/h`
      }
    />
  )
}
