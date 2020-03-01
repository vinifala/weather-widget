# Weather Widget

React based weather widget that reads the device's current location from `window.navigator.geolocation` and queries Open Weather Map's API to retrieve weather information

## Instructions

- Copy the file `./config.js.example`, rename the copy to `config.js`. Open `config.js` and paste your OMW App ID as the value of `OWMAppId` as a string.

- Run `npm install`

- Run `npm run start` to launch the dev server, open in the browser and see it in action at `localhost:8080`

## Commands

- Linter: `npm run lint`
- Formatter: `npm run prettier`
- Build: `npm run build`
- Dev server: `npm run start`

## Assumptions

- I'm assuming the font used is Open Sans, it was the best match I could find
- This app is not going to be used in a mobile device
- The degrees symbol is a `&deg;`. It could be the font, but I couldn't quite match it
- Drop shadow and border radii are a best effort

## Where to improve

Things left out or not complete due to time constraint

- I'd like to make the widget API agnostic, that is why there's an input interface and the call to the API is imported in the component instead of hard coded there. I have layed the foundation to open the possibility of reusing the widget with another weather information provider, however that's not fully fleshed out. I would like to have made an abstract class to serve as interface between the API data and the data the widget requires to work. Each API would then extend this class and transform data to fit the interface

- Styled componend generated class names. I would have liked to have given meaningful class names

- Handle the case in which the user does not allow access to location data

- Handle errors from the API request

- Use `alt` to show an alternative to the weather icon

- Make the app mobile friendly
