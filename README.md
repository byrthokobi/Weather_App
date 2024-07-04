This project is a Weather Application built with React.js that retrieves weather data from the Free Weather API. URL: https://www.weatherapi.com/

**Project Features**

    -Displays current weather information for a searched city.
    -Includes additional features of that searched city such as Wind Direction, Humidity, and Current Wind Pressure
    
    
**Getting Started**

    Clone the repository:
    git clone https://github.com/byrthokobi/Weather_App.git

Install dependencies:

cd Weather_app
npm install


Obtain an API key:

You'll need an API key from a weather service provider like OpenWeatherMap (https://openweathermap.org/).

Configure API key:

    Create a file named .env in the project root directory (ignore this file with Git).

    Add the following line to .env, replacing YOUR_API_KEY with your actual key:

    REACT_APP_WEATHER_API_KEY=YOUR_API_KEY

Start the development server:

npm start

    This will start the React development server at http://localhost:3000 by default.

Usage

    Open http://localhost:3000 in your web browser.
    Enter the name of a city in the search bar.
    Click "Search" or press Enter.
    The app will display the current weather information for the searched city.

**Project Structure**

The project structure may vary depending on your development preferences, but a typical structure might look like this:

weather-app/
  - src/
    - App.js  # Main application component
    - components/  # Reusable components (optional)
      - Highlights.jsx  # Search bar component (optional)
      - Temperature.jsx  # Weather information display component (optional)
    - assets/
  - public/
    - index.html  # Entry point for the application
  - .env  # File to store API key (ignored by Git)
  - package.json  # Project dependencies

**Customization**

This is a basic structure. You can customize the app by adding features such as:

    Displaying weather icons
    Showing a forecast for multiple days
    Implementing error handling for invalid city searches
    Adding a location search option

**Contributing**

Feel free to fork the repository and submit pull requests with your improvements.
