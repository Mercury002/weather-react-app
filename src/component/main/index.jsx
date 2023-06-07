import { useEffect, useState } from 'react';
import ForecastDaily from '../forecast';
import './styles.css'

const Mainblock = () => {
    const [countryName, setCountryName] = useState('')
    const [weatherObj, setWeatherObj] = useState({})
    
    useEffect(() => {
        setCountryName(Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]);

        if(countryName) {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=3db22371347c4f25a6982136230506&q=${countryName}&days=7`)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status' + response.status)
                }
            })
            .then(data => {
                console.log(data);
                setWeatherObj(data)
            })
            .catch(err => {
                console.log(err)
            });

        }

    }, [countryName]);

    return (
        <div>
            <div>
                <h3>Результаты для города {countryName}</h3>
                <strong>{weatherObj.current && weatherObj.current.last_updated}</strong>
            </div>

            <div>
                <span>
                    <img src={weatherObj.current && weatherObj.current.condition.icon} alt="" />
                    <b>{weatherObj.current && weatherObj.current.temp_c} °C</b>
                </span>
                <div>
                    <span>Вероятность осадков: {weatherObj.current && weatherObj.current.cloud}%</span>
                    <span>Влажность: {weatherObj.current && weatherObj.current.humidity}%</span>
                    <span>Ветер: {weatherObj.current && weatherObj.current.wind_kph}%</span>
                </div>
            </div>
            { (weatherObj.forecast && weatherObj.forecast.forecastday.length > 0)
                ? weatherObj.forecast.forecastday.map(item => <ForecastDaily dailyForecast={item} key={item.date}></ForecastDaily>) 
                : null
            }   
        </div>
    )
}

export default Mainblock;