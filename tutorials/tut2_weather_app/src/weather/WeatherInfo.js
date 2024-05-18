/**Create the weatherInfo component and pass weatherData and
 * cityName as props
 */
function WeatherInfo({ weatherData, cityName }) {
// Conversion from K to celsius
const conv = 273.15;
    return (
        <>
        {/* Return a div with bootstrap to display weather information */}
            <div className="weather-info text-center card bg-light">

                <h3>{cityName}</h3>
                <i className="bi bi-cloud-haze text-center display-2 text-warning"></i>
                {
                    // If weather data is undefined, return no data found.......
                    typeof weatherData.main == "undefined" ? (
                        <p>No data found</p>
                    ) : (
                        <>
                        {/* .....If it's not undefined, return weather data */}
                            <h3>{Math.round(weatherData.main.temp-conv)}<sup>o</sup> Cel</h3>
                            <hr />
                            <div className="row">
                                {/* Print max temparature */}
                                <div className="col-sm-4">{Math.round(weatherData.main.temp_max-conv)}<sup>o</sup> Cel<br /><b>Max Temp</b></div>
                                {/* Print min temparature */}
                                <div className="col-sm-4">{Math.round(weatherData.main.temp_min-conv)}<sup>o</sup> Cel<br /><b>Min Temp</b></div>
                                {/* Print max humidity */}
                                <div className="col-sm-4">{weatherData.main.humidity}%<br /><b>Humidity</b></div>

                            </div>
                        </>
                    )
                }

            </div>

        </>
    );
}

export default WeatherInfo;