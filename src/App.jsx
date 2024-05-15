import { useEffect, useState } from "react";
import "./App.css";
import Highlights from "./components/Highlights";
import Temperature from "./components/Temperature";

function App() {
  const [city, setCity] = useState("Rajshahi");
  const [weatherdata, setweatherdata] = useState(null);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=1964a0761433404289f225730241405&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setweatherdata(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top">
      <div className="mt-40 w-1/5 h-1/3">
        {weatherdata && (
          <Temperature
            setCity={setCity}
            stats={{
              temp: weatherdata.current.temp_c,
              condition: weatherdata.current.condition.text,
              location: weatherdata.location.name,
              is_day: weatherdata.current.is_day,
              time: weatherdata.location.localtime,
            }}
          />
        )}
      </div>
      <div className="bg-[#1F213A] mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
        <h2 className="text-slate-100 text-2xl col-span-2">
          Today's Highlights
        </h2>
        {weatherdata && (
          <>
            <Highlights
              stats={{
                title: "Wind Status",
                value: weatherdata.current.wind_mph,
                unit: " mph",
                wind_direction: weatherdata.current.wind_dir,
              }}
            />
            <Highlights
              stats={{
                title: "Humidity",
                value: weatherdata.current.humidity,
                unit: " %",
              }}
            />
            <Highlights
              stats={{
                title: "Visibility",
                value: weatherdata.current.vis_miles,
                unit: " miles",
              }}
            />
            <Highlights
              stats={{
                title: "Current Pressure",
                value: weatherdata.current.pressure_mb,
                unit: " mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
