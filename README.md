# Weather App

This is a weather application built with React, Vite, Tailwind CSS, DaisyUI, Redux, and Axios. It uses the AccuWeather API and Geolocation API to fetch and display weather data.

## Features

- **5-Day Forecast**: The app displays a 5-day weather forecast for the selected city.
- **12-Hour Forecast**: The app provides a 12-hour weather forecast for the selected city.
- **Current Weather**: The app shows the current weather conditions for the selected city.
- **Search Option**: Users can search for a city to view its weather conditions.
- **Responsive Design**: The app is fully responsive and works well on all screen sizes.
- **Theme Selection**: Users can choose between different themes for the app.
- **Favorites Page**: Users can save their favorite cities and view them on a separate page.
- **Temperature Unit Switch**: Users can switch between Fahrenheit and Celsius temperature units.
- **Loading Skeletons**: The app displays skeleton screens when loading data, providing a better user experience.

## APIs Used

- **AccuWeather API**: This API is used to fetch the current weather conditions and the 5-day forecast for the selected city.
- **Geolocation API**: This API is used to get the user's current location.

## Libraries Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **DaisyUI**: A plugin for Tailwind CSS that adds beautiful UI components.
- **Redux**: A predictable state container for JavaScript apps.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Heroicons - react**: A set of high-quality SVG icons for UI development.
- **Leaflet**: An open-source JavaScript library for mobile-friendly interactive maps.
- **Lodash**: A modern JavaScript utility library delivering modularity, performance & extras.
- **react-router-dom**: DOM bindings for React Router.

## Custom Hooks

- **useWeatherApi**: This hook is used to fetch weather data from the AccuWeather API. It provides functions to fetch the current weather, 5-day forecast, and hourly data for a city.
- **useSearchCity**: This hook is used to manage the search functionality of the app. It provides functions to search for a city, handle input changes, and fetch suggestions for the search input.
- **useThemeLogic**: This hook is used to manage the theme selection functionality of the app. It provides a function to handle theme changes.
- **useLocationLogic**: This hook is used to manage the location functionality of the app. It provides a function to handle location clicks.
- **useLocalStorage**: This hook is used to manage local storage. It provides a function to set local storage.
- **useGeoLocation**: This hook is used to get the user's geolocation.

## Redux Slices

- **tempUnitSlice**: This slice manages the state of the temperature unit (Fahrenheit or Celsius). It includes a toggle action to switch between the two units.
- **citySlice**: This slice manages the state of the selected city. It includes actions to set, clear, and handle errors for city data.
- **userLocationSlice**: This slice manages the state of the user's location. It includes actions to set the location and handle location errors.

## Components

- **Main**: This is the main component of the app. It fetches and displays the weather data for the selected city.
- **Map**: This component displays a map with a marker at the selected city's location.
- **Favs**: This component displays the user's favorite cities.

## How to Run the App

1. Sign up on the AccuWeather website and get an API key.
2. Clone the repository.
3. Install the dependencies with npm install.
4. Start the development server with npm run dev.
5. Open http://localhost:5173 in your browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
